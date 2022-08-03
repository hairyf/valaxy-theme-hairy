import type { ResolvedValaxyOptions, ValaxyExtendConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'

function addonHairy(options: ResolvedValaxyOptions<HairyTheme>): ValaxyExtendConfig {
  const safelist = options.config.themeConfig?.nav?.filter(v => v.icon)?.map(v => v.icon || '') || []
  return {
    extendMd(ctx) {
      if (ctx.route.meta.excerpt)
        ctx.route.meta.frontmatter.text = removeTags(ctx.route.meta.excerpt)
    },
    pages: {
      extendRoute(route) {
        // 改用 type, 由 theme 决定使用布局
        if (!route.meta.type && route.meta.layout)
          route.meta.type = route.meta.layout

        if (!route.meta.type)
          route.meta.type = 'default'

        // 清除所有 layout, 使用统一入口 hairy.vue
        route.meta.layout = 'hairy'
      },
    },
    unocss: {
      safelist,
    },
  }
}

export default addonHairy

function removeTags(str = '') {
  let content = str.replace(/<\/?[^>]*>/g, '')// 去除标签
  content = content.replace(/[|]*\n/, '')// 去除行尾空格
  return content
}
