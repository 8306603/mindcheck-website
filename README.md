# 星光错题本 (MindCheck) 官方网站

星光错题本官方网站与 App Store 提审合规页面。

## 页面对应与 App Store 提审配置

在 **App Store Connect** 提交审核时，填写对应 URL 如下（以实际部署的域名为例，如 `https://your-domain.com/`）：

| 审核字段 | 页面文件 | 示例访问链接 |
| :--- | :--- | :--- |
| **营销网址 (Marketing URL)** | [`index.html`](index.html) | `https://your-domain.com/index.html` 或 `https://your-domain.com/` |
| **隐私政策网址 (Privacy Policy URL)** | [`privacy.html`](privacy.html) | `https://your-domain.com/privacy.html` |
| **技术支持网址 (Support URL)** | [`support.html`](support.html) | `https://your-domain.com/support.html` |

---

## 目录结构

```text
mindcheck/
├── index.html          // 官网首页 (产品形象、iPadOS 核心卖点、6 步录题向导、下载入口)
├── privacy.html        // 隐私政策 (满足苹果 Guideline 5.1.1 与未成年人保护合规)
├── support.html        // 技术支持与 FAQ (常见问题排查、Apple Pencil 技巧、联系邮箱)
├── styles.css          // 现代 Apple HIG 风格响应式样式表
├── site.js             // 多语言国际化 (zhHans / zhHant / en) 与动态交互引擎
└── assets/
    ├── icon.png        // 1024x1024 高清原图 (吉祥物小星)
    ├── icon-192.png    // 网站与移动端快捷图标 (192x192)
    ├── favicon-32.png  // 浏览器标签页 Favicon (32x32)
    └── logo.png        // 品牌 Logo
```

---

## 本地预览

直接在浏览器中打开任何一个 HTML 文件，或使用任意本地静态服务器：

```bash
# 使用 Python 启动本地测试服务
cd /Users/macmini-diowang/website/mindcheck
python3 -m http.server 8080
```
然后在浏览器访问 `http://localhost:8080` 即可预览。

---

## 核心特性

- **多语言即时切换**：内置简体中文（默认）、繁體中文与 English，支持浏览器语言自适应与本地缓存记录；
- **响应式排版**：完美适配 Desktop 大屏、iPad 视网膜屏与 iPhone 移动端竖屏；
- **渐进增强**：纯语义化 HTML 静态结构，保证在无 JS 环境或爬虫抓取下依然完整可读，App Store 审核零死角。
