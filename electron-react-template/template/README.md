<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">Electron + React + Vite + TypeScript 桌面应用模板</h1>
<h4 align="center">现代化、高性能的 Electron 桌面应用开发框架，让桌面应用开发变得简单、高效、优雅！</h4>
<p align="center">
	<a href="#"><img src="https://img.shields.io/badge/version-1.0.3-green?style=flat-square"></a>
	<a href="#"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square"></a>
	<a href="#"><img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript"></a>
	<a href="#"><img src="https://img.shields.io/badge/Vite-7.0-purple?style=flat-square&logo=vite"></a>
	<a href="#"><img src="https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react"></a>
	<a href="#"><img src="https://img.shields.io/badge/Electron-38.0-blue?style=flat-square&logo=electron"></a>
	<a href="#"><img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css"></a>
</p>

---

## 📦 项目介绍

这是一个基于 Electron + React 19 + Vite 7 + TypeScript 5 的现代化桌面应用开发框架，集成了当前最流行的技术栈和最佳实践，旨在为开发者提供高效、可维护、可扩展的桌面应用开发解决方案。

### 核心特性

- **🚀 现代化构建** —— 基于 Vite 7 的极速构建，支持热更新、代码分割、Tree Shaking
- **📱 响应式设计** —— 基于 Tailwind CSS 的响应式设计系统，适配各种设备
- **🔧 TypeScript 支持** —— 完整的 TypeScript upport，提供类型安全和智能提示
- **🖥️ 桌面应用** —— 基于 Electron 的跨平台桌面应用支持
- **📊 状态管理** —— 集成 Redux Toolkit 的轻量级状态管理
- **🌐 API 封装** —— 基于 Axios 的 API 请求封装，支持拦截器、错误处理
- **🔍 开发工具** —— 集成 ESLint 等开发工具，保证代码质量
- **🔄 热重载** —— 开发环境下的热重载，提升开发效率
- **📦 包管理** —— 支持 npm、yarn、pnpm 等多种包管理器
- **🎯 最佳实践** —— 遵循 React 和 TypeScript 最佳实践，提供规范的代码结构

## 🏗️ 项目架构

```
src/
├── 📁 assets/              # 静态资源
│   └── images/             # 图片资源
├── 📁 pages/               # 页面组件
│   ├── home.tsx            # 首页
│   └── about.tsx           # 关于页面
├── 📁 utils/               # 工具函数
│   ├── index.tsx           # 工具函数入口
│   └── request.tsx         # 封装的axios请求
├── 📁 types/               # 类型定义
│   └── sharred.tsx         # 泛型的定义
├── App.tsx                 # 应用根组件（页面切换逻辑）
├── main.tsx                # 应用入口
├── index.css               # 全局样式
└── App.css                 # 应用样式
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0 或 pnpm >= 7.0.0

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 启动开发服务器

```bash
# 启动 Electron 开发环境（同时启动 Vite 服务器和 Electron 应用）
npm run electron:dev
```

### 访问应用

运行开发命令后，Electron 应用会自动启动并加载本地开发服务器。

## 📦 打包部署

### 生产构建

```bash
# 构建生产版本
npm run electron:build
```

### 国内用户特别说明

由于网络原因，国内用户在打包 Electron 应用时可能会遇到下载失败的问题。请在打包前设置镜像源：

**Windows (PowerShell):**
```powershell
$env:ELECTRON_BUILDER_BINARIES_MIRROR = "https://npmmirror.com/mirrors/electron-builder-binaries/"
npm run electron:build
```

**Windows (CMD):**
```cmd
set ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
npm run electron:build
```

**macOS/Linux:**
```bash
export ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
npm run electron:build
```

### 平台特定构建

```bash
# 构建 Windows 应用
npm run electron:buildWin

# 构建 macOS 应用
npm run electron:buildMac

# 构建 Linux 应用
npm run electron:buildLinux
```

构建完成的应用会生成在 `release` 目录中。

## 🤝 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 🐛 Bug 报告
- 💡 功能建议
- 📝 文档改进
- 🔧 代码贡献

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 代码规范

- 遵循 TypeScript 最佳实践
- 使用 ESLint 保持代码风格一致
- 更新相关文档

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目的支持：

- [Electron](https://www.electronjs.org/) - 跨平台桌面应用框架
- [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架

## 📞 联系我们

- 📧 邮箱：suxiaoxiang0217@gmail.com

---

<div align="center">
  <p>如果这个项目对您有帮助，请给我们一个 ⭐️</p>
  <p>Made with ❤️ by Suxiaoxiang</p>
</div>


