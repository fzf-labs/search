
// 处理扩展图标点击
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'index.html' });
});

// 处理搜索建议请求
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_SUGGESTIONS') {
    fetch(`https://suggestion.baidu.com/su?wd=${encodeURIComponent(request.query)}&ie=utf-8&p=3&cb=callback`)
      .then(response => response.text())
      .then(text => {
        try {
          // 提取 JSON 字符串并添加双引号
          const jsonStr = text
            .replace(/^callback\(/, '')
            .replace(/\);?$/, '')
            .replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
          
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
});