# LeeNoon 的温柔博客

一个基于 Hugo 构建的现代化个人博客，具有美观的设计和丰富的功能。

## ✨ 特性

### 🎨 现代化主题
- 美观的紫蓝渐变配色方案
- 自定义排版（Noto Sans SC + Fira Code 字体）
- 流畅的动画和过渡效果
- 完全响应式设计
- 🌓 深色/浅色模式切换

### 📝 内容组织
- 文章分类系统
- 标签系统
- 🔍 客户端搜索功能
- 📡 RSS 订阅支持
- 时间轴式文章列表

### 🎯 核心页面
- **首页**: 卡片式布局展示最新文章
- **文章列表**: 时间轴布局
- **关于我**: 个人介绍页面
- **联系**: 联系方式页面
- **作品集**: 项目展示页面

### 💬 互动功能
- Giscus 评论系统集成
- 社交分享按钮（Twitter, Facebook）
- 阅读时间估算

### 💻 技术特性
- Monokai 主题代码高亮
- 行号显示
- 多语言代码支持
- SEO 优化（Open Graph, Twitter Cards）
- 语义化 HTML

## 🚀 快速开始

### 前提条件
- Hugo Extended v0.100.0 或更高版本

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/LeeNoon/LeeNoon.github.io.git
cd LeeNoon.github.io

# 启动开发服务器
hugo server -D

# 访问 http://localhost:1313
```

### 构建生产版本

```bash
hugo --minify
```

## 📝 创建新文章

```bash
hugo new posts/my-new-post.md
```

编辑文章前言：

```yaml
---
title: "文章标题"
date: 2025-10-29
draft: false
categories: ["分类"]
tags: ["标签1", "标签2"]
description: "文章描述"
---
```

## ⚙️ 配置

### 评论系统

要启用 Giscus 评论系统，请：

1. 访问 https://giscus.app/
2. 配置你的仓库
3. 更新 `config.toml` 中的以下值：

```toml
[params.comments.giscus]
  repo = "LeeNoon/LeeNoon.github.io"
  repoId = "your-repo-id"
  category = "Comments"
  categoryId = "your-category-id"
```

### 社交链接

在 `config.toml` 中更新：

```toml
[params.social]
  github = "你的GitHub用户名"
  email = "你的邮箱"
```

## 📁 项目结构

```
.
├── archetypes/          # 内容模板
├── content/            # 内容文件
│   ├── about/         # 关于页面
│   ├── contact/       # 联系页面
│   ├── portfolio/     # 作品集页面
│   └── posts/         # 博客文章
├── layouts/           # 布局模板
│   ├── _default/     # 默认布局
│   ├── partials/     # 部分模板
│   └── ...
├── static/           # 静态资源
│   ├── css/         # 样式文件
│   └── js/          # JavaScript 文件
└── config.toml      # 站点配置
```

## 🎨 自定义

### 主题颜色

编辑 `static/css/style.css` 中的 CSS 变量：

```css
:root {
  --accent-primary: #667eea;
  --accent-secondary: #764ba2;
  /* 更多变量... */
}
```

### 字体

在 `layouts/_default/baseof.html` 中更改 Google Fonts 链接。

## 📄 许可证

此项目采用 MIT 许可证。

## 🙏 致谢

- [Hugo](https://gohugo.io/) - 静态站点生成器
- [Giscus](https://giscus.app/) - 评论系统
- 所有开源贡献者

---

用 ❤️ 构建
