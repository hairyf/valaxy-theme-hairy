import { defineConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-starter'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<HairyTheme>({
  lang: 'zh-CN',
  title: 'Valaxy Theme Starter',
  url: 'https://starter.valaxy.site/',
  author: {
    avatar: 'https://www.yunyoujun.cn/images/avatar.jpg',
    name: '云游君',
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
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-github-line',
      },
      {
        text: 'About',
        link: '/archives/',
      },
      {
        text: 'Posts',
        link: '/posts/',
      },
      {
        text: 'Github',
        link: 'https://github.com/YunYouJun/valaxy',
      },
    ],
  },
})
