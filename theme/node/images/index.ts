import type { ResolvedValaxyOptions, ValaxyTheme } from 'valaxy'
import type { HairyTheme, ThemeConfig } from '../../types'
import defaultImages from './default.json'

export function withImageConfig(options: ResolvedValaxyOptions<HairyTheme.Config>): ValaxyTheme<ThemeConfig> {
  const prefix = '@hairy'
  const postConfig = options.config.themeConfig?.post
  const homeConfig = options.config.themeConfig?.home

  const isEnough = (postConfig?.images?.length || 0) > 6

  const postImages = isEnough ? postConfig!.images! : defaultImages
  const homeImages = homeConfig?.images?.length ? homeConfig?.images : postImages
  let count = 0

  return {
    vite: {
      plugins: [
        {
          name: 'vite-plugin-hairy:image',
          resolveId(id) {
            if (id.startsWith(prefix))
              return id
            return null
          },
          load(id) {
            if (id === '@hairy:images:post')
              return `export default ${JSON.stringify(postImages)}`
            if (id === '@hairy:images:home')
              return `export default ${JSON.stringify(homeImages)}`
          },
        },
      ],
    },
    extendMd(ctx) {
      if (ctx.route.meta.frontmatter.image)
        return
      ctx.route.meta.frontmatter.image = postImages[count]

      if (count <= postImages.length)
        count++
      if (count >= postImages.length)
        count = 0
    },
  }
}
