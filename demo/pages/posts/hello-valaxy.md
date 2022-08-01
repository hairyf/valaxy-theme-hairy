---
title: Hello, Valaxy!
date: 2022-03-22
updated: 2022-03-23
categories: Valaxy 开发笔记
tags:
  - valaxy
  - 笔记
---

## Hello, Valaxy!

```ts
import type { ThemeConfig } from 'valaxy-theme-hairy'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  // your theme name
  // valaxy-theme-yun name is 'yun'
  theme: 'starter',

  themeConfig: {
    banner: {
      enable: true,
      title: '云游君的小站',
    },
  },
})
```
