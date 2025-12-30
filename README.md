<div align="center">

# 🛡️ Tanguy Frageul - Portfolio & Blog

### Cybersecurity Student | Pentest & CTF Enthusiast

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Powered by Frosti](https://img.shields.io/badge/Powered%20by-Frosti-4F46E5)](https://github.com/EveSunMaple/Frosti)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[**🌐 Visit the site**](https://tanguy-fgl.me) • [**📝 Read the blog**](https://tanguy-fgl.me/blog) • [**💼 View my projects**](https://tanguy-fgl.me/projects)


</div>

---

## 📖 About

Welcome to my **personal blog and portfolio**! This site is dedicated to **cybersecurity**, **pentesting**, **CTF challenges**, and everything related to information security.

🎯 **Goal**: Share my knowledge, document my projects, and build a community around cybersecurity.

### ✨ Features

- 🌓 **Light / Dark mode** with elegant themes
- ⚡ **Optimal performance** and excellent SEO
- 🔍 **Integrated search** to easily navigate through articles
- 📱 **Responsive design** with Tailwind CSS and daisyUI
- 🎨 **Smooth animations** with View Transitions
- 📡 **RSS feed** to follow new articles
- 🚀 **Continuous deployment** with GitHub Pages

## 🤝 Contributing to the Blog

**This blog is open to contributions!** 🎉

Do you have cybersecurity knowledge you'd like to share? You're welcome to submit your articles!

### 📝 How to Contribute?

1. **Fork** this repository
2. Create your article in `src/content/blog/`
3. Follow the Markdown or MDX format
4. Ensure your content is **relevant** and **high-quality**
5. **Respect the source code** and existing structure
6. Submit a **Pull Request**

### ✅ Acceptance Criteria

- ✨ Original and quality content
- 🎯 Relevant to cybersecurity, development, or IT
- 📐 Respects the format and structure of existing articles
- 🧹 Clean and well-documented code if adding features
- 🚫 No offensive, illegal, or malicious content

> **Note**: Each contribution will be reviewed before publication to ensure consistency and quality of the blog.

## 🎨 Powered by Frosti

This portfolio is based on [**Frosti**](https://github.com/EveSunMaple/Frosti) created by [@EveSunMaple](https://github.com/EveSunMaple) - a modern and elegant blog template for Astro.


## 🚀 Installation and Usage

### Prerequisites

- Node.js (v18 or higher, I recommend NodeJS 24 or 25)
- pnpm (recommended)

### Installation

```bash
# Install pnpm if not already done
npm i -g pnpm

# Clone the repository
git clone https://github.com/tanguy-fgl/tanguy-fgl.github.io.git
cd tanguy-fgl.github.io

# Install dependencies
pnpm i

# Generate search index (first run)
pnpm run search:index

# Start development server
pnpm run dev

# Before commiting, format and lint with Biome
pnpm lint && pnpm format

# Check biome & astro
pnpm check-all