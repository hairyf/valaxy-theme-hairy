import { defineTheme } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'
import markdownFurigana from 'furigana-markdown-it'
import addonHairy from './node/addon-hairy'
import addonImages from './node/addon-images'
import addonStatistics from './node/addon-statistics'
import addonToc from './node/addon-toc'
export default defineTheme<HairyTheme>((options) => {
  const images = addonImages(options)
  const hairy = addonHairy()

  return {
    vite: images.vite,
    pages: hairy.pages,
    extendMd(ctx) {
      hairy.extendMd?.(ctx)
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

