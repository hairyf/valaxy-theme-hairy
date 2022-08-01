import { defineTheme } from 'valaxy'
import type { HairyTheme } from 'theme'
import markdownFurigana from 'furigana-markdown-it'
import addonHairy from './node/addon-hairy'
import addonImages from './node/addon-images'
import addonStatistics from './node/addon-statistics'
import addonToc from './node/addon-toc'
export default defineTheme<HairyTheme>((options) => {
  const images = addonImages(options)
  return {
    vite: images.vite,
    extendMd(ctx) {
      addonHairy().extendMd?.(ctx)
      images.extendMd?.(ctx)
      addonStatistics().extendMd?.(ctx)
      addonToc().extendMd?.(ctx)
    },
    markdown: {
      config(md) {
        md.use(markdownFurigana())
      },
    },
  }
})

