# Search Extension

一个强大的浏览器搜索扩展，支持多搜索引擎快速切换和智能搜索建议。

## 功能特点

- 🔍 支持多个主流搜索引擎
- 💡 智能搜索建议（基于百度搜索建议）
- ⌨️ 键盘快捷操作
- 🎨 简洁现代的界面设计
- 🚀 快速响应，无延迟
- 📱 响应式设计，支持各种屏幕尺寸

## 支持的搜索引擎

- 社交媒体（微博、知乎、即刻等）
- 网盘搜索（夸克搜索、阿里云盘等）
- 更多搜索引擎持续添加中...

## 安装

1. 下载项目代码
```bash
git clone https://github.com/fzf-labs/search.git
```
2. 安装依赖
```bash
npm install
```
3. 构建扩展
```bash
npm run build:extension
```
4. 在 Chrome 浏览器中加载扩展
   - 打开 Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 开启"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择项目中的 `extension` 目录

## 开发

1. 安装依赖
```bash
npm install
```
2. 启动开发环境
```bash
npm run dev
```

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- Chrome Extension API

## 项目结构
```
├── src/
│ ├── components/ # React 组件
│ ├── contexts/ # React Context
│ ├── config/ # 配置文件
│ └── types/ # TypeScript 类型定义
├── extension/ # 扩展构建输出目录
├── public/ # 静态资源
└── scripts/ # 构建脚本
```

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情