---
title: 特殊功能
categories: Valaxy Theme Hairy
home: false
tags:
  - valaxy
  - 教程
date: 2022-08-04 14:00:00
---

:::info
以下介绍可以使用的 markdown 或者 html 标签。

功能大部分基于 `markdown-it` 插件与 `theme/components` 中的组件。
:::

## links 链接

基于 theme components，用来建立友链或其他网址链接功能。

使用 `HairyLinks` 标签、字段包含

|  字段  | 名称 | 必填 |
|----|---|---|
| name  | 名称 | 是 |
| url   | 地址 | 是 |
| image | 图片 | 是 |
| color | 颜色 | 是 |
| desc  | 描述 | 否 |

<!-- more -->

```html
<hairy-links :links="[
  {
    name: 'Hairy’s Blog',
    url: 'https://hairy.blog',
    image: 'https://tuimao233.gitee.io/mao-blog/avatar.png',
    color: '#1bc9a6',
    desc: '记录生活，持续学习。',
  },
]" />
```

## 代码块行高亮

输入

~~~md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

显示

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## furigana 文字注音

增加了对注音假名的支持，基于 [furigana-markdown-it](https://github.com/iltrof/furigana-markdown-it)

输入

```md
[猫]{ねこ}
```

显示

[猫]{ねこ}

## 图片展示与分组

使用 `HairyImage` 标签，基于 Vue Component 与 [element-plus#image](https://element-plus.gitee.io/en-US/component/image.html) 实现，完全支持 `el-image` 的所有属性。

```html
<hairy-image style="width: 400px" fit="cover" src="https://...jpg" />
```

<hairy-image style="width: 400px" fit="cover" src="https://tva2.sinaimg.cn/large/6833939bly1gicitht3xtj20zk0m8k5v.jpg" />

使用 `HairyImageGroup` 对图片分组，分组后支持点击打开图片浏览器。

```html
<hairy-image-group row="120px">
  <hairy-image fit="cover" src="https://...jpg" />
  <hairy-image fit="cover" src="https://...jpg" />
  <hairy-image fit="cover" src="https://...jpg" />
  <hairy-image fit="cover" src="https://...jpg" />
  <hairy-image fit="cover" src="https://...jpg" />
</hairy-image-group>
```

<hairy-image-group row="120px">
  <hairy-image fit="cover" src="https://tva2.sinaimg.cn/large/6833939bly1gicli3sbvtj20zk0m8x6p.jpg" />
  <hairy-image fit="cover" src="https://tva2.sinaimg.cn/large/6833939bly1giclj61ylzj20zk0m8b29.jpg" />
  <hairy-image fit="cover" src="https://tva2.sinaimg.cn/large/6833939bly1gicitht3xtj20zk0m8k5v.jpg" />
  <hairy-image fit="cover" src="https://tva2.sinaimg.cn/large/6833939bly1gipesng5oej20zk0m87d4.jpg" />
  <hairy-image fit="cover" src="https://tva2.sinaimg.cn/large/6833939bly1gipeybxm1pj20zk0m8niv.jpg" />
</hairy-image-group>

`HairyImageGroup` 支持以下属性

- `row` 所有图片的宽度
- `col` 所有图片的高度
- `gap` 图片之间的间距
- `justify` 图片的左右对齐方式
- `align`   图片的上下对齐方式

## 代码片段

代码片段使用 [codepen](https://codepen.io/) 支持，必须传入 `slugHash` 和 `user`。

```html
<hairy-codepen slug-hash="wvwEOZL" user="GreenSock" />
```
