---
title: "Hugo 博客搭建指南"
date: 2025-10-29T11:00:00+08:00
draft: false
categories: ["技术"]
tags: ["Hugo", "博客", "教程"]
description: "详细介绍如何使用 Hugo 搭建一个现代化的个人博客。"
---

## 前言

Hugo 是一个快速、现代的静态网站生成器，非常适合用来搭建个人博客。

### 为什么选择 Hugo？

- ⚡ **速度快**：构建速度极快
- 🎨 **灵活**：完全自定义
- 📝 **简单**：使用 Markdown 写作
- 🆓 **免费**：开源且免费

### 快速开始

#### 1. 安装 Hugo

在 macOS 上：

```bash
brew install hugo
```

在 Linux 上：

```bash
wget https://github.com/gohugoio/hugo/releases/download/vX.XX.X/hugo_X.XX.X_Linux-64bit.tar.gz
tar -xzf hugo_X.XX.X_Linux-64bit.tar.gz
sudo mv hugo /usr/local/bin/
```

#### 2. 创建新站点

```bash
hugo new site myblog
cd myblog
```

#### 3. 创建第一篇文章

```bash
hugo new posts/my-first-post.md
```

#### 4. 启动开发服务器

```bash
hugo server -D
```

### 配置说明

在 `config.toml` 中配置你的网站：

```toml
baseURL = "https://yourblog.com/"
languageCode = "zh-CN"
title = "我的博客"

[params]
  description = "这是我的博客描述"
  author = "你的名字"
```

### 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 添加 GitHub Actions 工作流
3. 推送代码
4. 等待自动部署

### 总结

Hugo 是一个强大而灵活的工具，希望这篇教程能帮助你快速上手！

---

**相关链接：**
- [Hugo 官方文档](https://gohugo.io/documentation/)
- [Hugo 主题](https://themes.gohugo.io/)
