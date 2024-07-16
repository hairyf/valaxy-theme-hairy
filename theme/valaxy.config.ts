import type { DefaultTheme, ValaxyTheme } from 'valaxy'
import { defineTheme, mergeValaxyConfig } from 'valaxy'
import markdownFurigana from 'furigana-markdown-it'
import { withImageConfig, withThemeConfig } from './node'
import type { ThemeConfig } from './types'

export default defineTheme<ThemeConfig>((options) => {
  let config: ValaxyTheme<ThemeConfig & DefaultTheme.Config> = {
    themeConfig: {
      valaxyDarkOptions: {
        useDarkOptions: { disableTransition: false },
        circleTransition: true,
      },
      outline: 2,
      theme: 'dark',
      layout: {
        post: 'image:slice:reverse',
      },
    },
    markdown: {
      theme: {
        dark: 'material-theme-darker',
        light: 'material-theme-lighter',
      },
      config(md) {
        md.use(markdownFurigana())
      },
    },
    vite: {
      optimizeDeps: { include: ['dayjs', 'element-plus'] },
    },
  }

  config = mergeValaxyConfig(config, withImageConfig(options))
  config = mergeValaxyConfig(config, withThemeConfig(options))

  return config
})
