import { defineTheme } from 'valaxy'
import type { HairyTheme } from 'theme'
import { mergeValaxyConfig } from './node/utils'
import addonHairy from './node/addon-hairy'
import addonImages from './node/addon-images'
import addonStatistics from './node/addon-statistics'

export default defineTheme<HairyTheme>((options) => {
  return mergeValaxyConfig(
    addonImages(options),
    addonHairy(),
    addonStatistics(),
  )
})

