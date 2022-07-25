import { defineTheme } from 'valaxy'
import type { HairyTheme } from 'theme'
import addonHairy from './node/addon-hairy'
import addonImages from './node/addon-images'
import addonStatistics from './node/addon-statistics'

export default defineTheme<HairyTheme>((options) => {
  return {
    extendMd(ctx) {
      addonHairy().extendMd?.(ctx)
      addonImages(options).extendMd?.(ctx)
      addonStatistics().extendMd?.(ctx)
    },
  }
})

