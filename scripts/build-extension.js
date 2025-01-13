const fs = require('fs-extra')
const path = require('path')
const { spawnSync } = require('child_process')

async function buildExtension() {
  try {
    // 清理构建目录
    await fs.remove(path.join(process.cwd(), '.next'))
    await fs.remove(path.join(process.cwd(), 'out'))
    
    // 构建 Next.js 项目
    const buildResult = spawnSync('npm', ['run', 'build'], {
      stdio: 'inherit',
      shell: true
    })

    if (buildResult.status !== 0) {
      throw new Error(`Build failed with status ${buildResult.status}`)
    }
    
    const outDir = path.join(process.cwd(), 'out')
    const extensionDir = path.join(process.cwd(), 'extension')
    
    // 清理并创建扩展目录
    await fs.remove(extensionDir)
    await fs.ensureDir(extensionDir)
    
    // 复制构建文件到扩展目录，但排除 _next 目录
    const files = await fs.readdir(outDir)
    for (const file of files) {
      if (!file.startsWith('_')) {
        await fs.copy(
          path.join(outDir, file),
          path.join(extensionDir, file)
        )
      }
    }

    // 复制 _next 目录内容到 assets 目录
    const nextDir = path.join(outDir, '_next')
    if (await fs.pathExists(nextDir)) {
      await fs.copy(nextDir, path.join(extensionDir, 'assets'))
    }

    // 更新 HTML 文件中的路径引用
    const htmlFile = path.join(extensionDir, 'index.html')
    if (await fs.pathExists(htmlFile)) {
      let htmlContent = await fs.readFile(htmlFile, 'utf8')
      htmlContent = htmlContent.replace(/\/_next\//g, '/assets/')
      
      // 处理所有内联脚本
      const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/g
      const matches = [...htmlContent.matchAll(scriptRegex)]
      
      for (let i = 0; i < matches.length; i++) {
        const scriptTag = matches[i][0]
        // 跳过已经有 src 属性的脚本标签
        if (scriptTag.includes('src=')) continue
        
        const scriptContent = matches[i][1]
        if (!scriptContent.trim()) continue // 跳过空脚本
        
        const scriptPath = `script-${i}.js`
        
        // 保存脚本到外部文件
        await fs.writeFile(path.join(extensionDir, scriptPath), scriptContent)
        
        // 替换内联脚本为外部脚本引用
        htmlContent = htmlContent.replace(
          scriptTag,
          `<script src="${scriptPath}" defer></script>`
        )
      }
      
      await fs.writeFile(htmlFile, htmlContent)
    }

    // 创建 manifest.json
    const manifest = {
      manifest_version: 3,
      name: "Search",
      version: "1.0.0",
      description: "Local Search",
      action: {
        default_title: "Search"
      },
      icons: {
        "16": "icons/icon-16.png",
        "32": "icons/icon-32.png",
        "48": "icons/icon-48.png",
        "128": "icons/icon-128.png"
      },
      background: {
        service_worker: "background.js"
      },
      permissions: [
        "tabs"
      ],
      host_permissions: [
        "https://*.baidu.com/*"
      ],
      content_security_policy: {
        extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
      }
    }

    await fs.writeJSON(path.join(extensionDir, 'manifest.json'), manifest, { spaces: 2 })

    // 创建 background.js
    const background = `
// 处理扩展图标点击
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'index.html' });
});

// 处理搜索建议请求
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_SUGGESTIONS') {
    fetch(\`https://suggestion.baidu.com/su?wd=\${encodeURIComponent(request.query)}&ie=utf-8&p=3&cb=callback\`)
      .then(response => response.text())
      .then(text => {
        try {
          // 提取 JSON 字符串并添加双引号
          const jsonStr = text
            .replace(/^callback\\(/, '')
            .replace(/\\);?$/, '')
            .replace(/([{,])\\s*([a-zA-Z0-9_]+)\\s*:/g, '$1"$2":');
          
          // 解析 JSON
          const data = JSON.parse(jsonStr);
          sendResponse({ success: true, data: data });
        } catch (error) {
          console.error('JSON parse error:', error, 'Raw text:', text);
          sendResponse({ success: false, error: 'Invalid JSON response' });
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        sendResponse({ success: false, error: error.message });
      });
    return true; // 保持消息通道开放
  }
});`

    await fs.writeFile(path.join(extensionDir, 'background.js'), background)
    
    console.log('Extension built successfully!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

buildExtension() 