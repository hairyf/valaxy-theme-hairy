import { defineConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-starter'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<HairyTheme>({
  lang: 'zh-CN',
  title: 'Hairy\'s Blog',
  url: 'https://starter.valaxy.site/',
  author: {
    avatar: 'https://tuimao233.gitee.io/mao-blog/avatar.png',
    name: '毛先生',
  },
  description: 'Valaxy Theme Starter Preview.',

  theme: 'starter',
  social: [
    {
      icon: 'i-ri-github-line',
    },
  ],
  search: {
    enable: true,
    algolia: {
      enable: true,
      appId: '0B89DLR0Q9',
      apiKey: '756e8e048364fae43536c1d0000734a6',
      indexName: 'hairy.blog',
    },
  },

  themeConfig: {
    nav: [
      // {
      //   text: 'Home',
      //   link: '/',
      // },
      // {
      //   text: 'About',
      //   link: '/about',
      // },
      // {
      //   text: 'Posts',
      //   link: '/posts/',
      // },
      // {
      //   text: 'Github',
      //   link: 'https://github.com/YunYouJun/valaxy',
      // },
    ],
    user: {
      name: 'TuiMao',
      description: 'Mao\'s Notes',
    },
  },
})
