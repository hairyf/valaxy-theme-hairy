/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import type { ResolvedValaxyOptions, ValaxyExtendConfig } from 'valaxy'
import type { HairyTheme } from '..'
import defaultImages from '../images.json'

let count = 0

function addonImages(options: ResolvedValaxyOptions<HairyTheme>): ValaxyExtendConfig {
  const hairyPrefix = '@hairy'
  const postConfig = options.config.themeConfig?.post
  const homeConfig = options.config.themeConfig?.home

  const isEnough = (postConfig?.images?.length || 0) > 6

  const inImages = isEnough ? postConfig?.images! : defaultImages

  const filterInImages = (type: 'large' | 'mw690') => {
    const inType = type === 'large' ? 'mw690' : 'large'
    return inImages.filter((image) => {
      if (image.includes('sinaimg.cn/'))
        return image.replace(inType, type)
      return image
    })
  }

  const postImages = isEnough ? postConfig?.images! : filterInImages('mw690')
  const homeImages = homeConfig?.images?.length ? homeConfig?.images : filterInImages('large')

  return {
    vite: {
      plugins: [
        {
          name: 'vite-plugin-hairy:image',
          resolveId(id) {
            if (id.startsWith(hairyPrefix))
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
      if (postImages.length >= 6) {
        if (!ctx.route.meta.frontmatter.image)
          ctx.route.meta.frontmatter.image = postImages[count]
        if (count <= postImages.length)
          count++
        if (count >= postImages.length)
          count = 0
      }
    },
  }
}

export default addonImages
