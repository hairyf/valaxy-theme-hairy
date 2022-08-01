import type { ResolvedValaxyOptions, ValaxyExtendConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'

function addonMeting(options: ResolvedValaxyOptions<HairyTheme>): ValaxyExtendConfig {
  return {
    extendMd(ctx) {
      if (options.config.themeConfig?.meting)
        ctx.route.meta.frontmatter.aplayer = true
    },
  }
}

export default addonMeting
