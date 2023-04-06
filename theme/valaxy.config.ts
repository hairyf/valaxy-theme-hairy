import type { ValaxyTheme } from 'valaxy'
import { defineTheme, mergeValaxyConfig } from 'valaxy'
import { withImageConfig } from './node/images'
import { withThemeConfig } from './node/theme'
import type { ThemeConfig } from './types'

export default defineTheme<ThemeConfig>((options) => {
  let config: ValaxyTheme<ThemeConfig> = {}

  config = mergeValaxyConfig(config, withImageConfig(options))
  config = mergeValaxyConfig(config, withThemeConfig(options))

  return config
})
