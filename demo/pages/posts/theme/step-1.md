---
title: 主题配置
categories: Valaxy Theme Hairy
date: 2022-08-03 16:00:00
home: false
tags:
  - valaxy
  - 教程
---

通过修改 valaxy.config 的 themeConfig 字段，可以修改部分主题部分。

```ts
import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hairy'
export default defineConfig<ThemeConfig>({
  theme: 'hairy',

  themeConfig: {
    // ...
  },
})
```

## 主页配置

```json
{
  // 修改此列表更改主页轮播图使用的图片列表
  // 默认使用 hairy 内置的图片列表
  "images": [/* your image urls */]
}
```

## 文章配置

```json
{
  "layout": {
    "post": "image:slice:reverse"
  },
  // posts image 数量需要达到 6 个以上才会生效
  "images": [/* your image urls */]
}
```

<!-- more -->

文章列表布局支持五种布局，分别是 `text`、`markdown`、`image`、`image:slice`、`image:slice:reverse`

<HairyImageGroup row="150px">
  <HairyImage src="https://tva3.sinaimg.cn/large/008ugSUaly8h4tkzd4r8yj315l0u0tb0.jpg" />
  <HairyImage src="https://tva3.sinaimg.cn/large/008ugSUaly8h4tkzgjn6wj31ha0nkdj4.jpg" />
  <HairyImage src="https://tva3.sinaimg.cn/large/008ugSUaly8h4tkzrldvej317n0u0q9h.jpg" />
  <HairyImage src="https://tva3.sinaimg.cn/large/008ugSUaly8h4tl0fhm8ej313h0u0wk7.jpg" />
  <HairyImage src="https://tva3.sinaimg.cn/large/008ugSUaly8h4tl0rjknkj31kx0u0jz0.jpg" />
</HairyImageGroup>

目前比较完善的是 `image` 相关布局，其他布局假如有需求在完善（很懒不想动.jpg

## 导航配置

导航配置目前同时作用于顶部导航与用户卡片，配置后两者都将生效。

```json
{
  "nav": [
    {
      "text": "Home",
      "link": "/",
      "icon": "i-material-symbols-home-work-sharp"
    },
    {
      "text": "Github",
      "icon": "i-ri-github-fill",
      "link": "https://..."
    }
  ]
}
```

## 页脚配置

```json
{
  // 建站时间
  "since": 2016,
  // 备案信息
  "beian": {
    "icp": "...号"
  },
  // 标注博客信息(theme / valaxy)
  "powered": true
}
```

## Meting

Meting 是基于 APlayer 的播放器组件、它支持网易云音乐、QQ音乐、酷狗，以及更多的主流播放源。

```ts
import { defineConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'

export default defineConfig<ThemeConfig>({
  theme: 'hairy',
  addons: [
    addonMeting({
      global: true,
      props: {
        id: '5312894314',
        type: 'playlist',
        autoplay: true,
        theme: 'var(--hy-c-primary)',
      },
    }),
  ]
})
```

您可以查看 Meting 更多的 [API 文档](https://github.com/metowolf/MetingJS#option)，global 开启全局播放器。
