import { defineConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'
import VitePluginVueJsx from '@vitejs/plugin-vue-jsx'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<HairyTheme>({
  lang: 'zh-CN',
  title: 'Hairy\'s Blog',
  url: 'https://tuimao233.gitee.io/valaxy-theme-hairy',
  author: {
    avatar: 'https://tuimao233.gitee.io/mao-blog/avatar.png',
    name: '毛先生',
  },
  description: 'Valaxy Theme Hairy Preview.',
  theme: 'hairy',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '951416545',
      link: '--',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/TuiMao233',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=293486586',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/mao-mao-47-99-46',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1490903',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wwu710632@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Hairy',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],
  comment: {
    waline: {
      enable: true,
      serverURL: 'https://valaxy-blog-waline.vercel.app/',
    },
  },
  search: {
    enable: true,
    algolia: {
      enable: true,
      appId: '0B89DLR0Q9',
      apiKey: '756e8e048364fae43536c1d0000734a6',
      indexName: 'hairy.blog',
    },
  },
  vite: {
    base: '/valaxy-theme-hairy/',
    plugins: [
      VitePluginVueJsx(),
    ],
  },
  markdown: {
    theme: 'material-ocean',
  },
  themeConfig: {
    mode: 'dark',
    home: {
      images: [],
      description: 'good evening, how are you doing?',
    },
    post: {
      layout: 'image:slice:reverse',
      /**
       * posts image 数量需要达到 6 个以上才会生效
       */
      images: [],
    },
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about',
      },
      {
        text: 'Posts',
        link: '/archives/',
      },
      {
        text: 'Github',
        link: 'https://github.com/TuiMao233/valaxy-theme-hairy',
      },
    ],
    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
      powered: true,
    },
    user: {
      name: 'TuiMao',
      description: 'Mao\'s Notes',
    },
    meting: {
      auto: 'https://music.163.com/#/playlist?id=2043085869',
      autoplay: true,
      theme: 'var(--hy-c-primary)',
    },
  },
})
