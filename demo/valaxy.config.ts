import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hairy'
import { addonWaline } from 'valaxy-addon-waline'
import { addonMeting } from 'valaxy-addon-meting'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'hairy',

  themeConfig: {
    theme: 'dark',
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
        icp: '苏ICP备xxxxxx号',
      },
      powered: true,
    },
  },

  addons: [
    addonWaline({
      comment: true,
      serverURL: 'https://blog-waline-hairy.vercel.app',
      emoji: [
        '//unpkg.com/@waline/emojis@1.0.1/weibo',
        '//unpkg.com/@waline/emojis@1.0.1/bilibili',
      ],
      pageview: true,
    }),
    addonMeting({
      global: true,
      props: {
        id: '5312894314',
        type: 'playlist',
        autoplay: true,
        theme: 'var(--hy-c-primary)',
      },
    }),
  ],
})
