/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import fs from 'fs'
import type { ResolvedValaxyOptions, ValaxyExtendConfig } from 'valaxy'
import { defineTheme } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'
import markdownFurigana from 'furigana-markdown-it'
import readingTime from 'reading-time'
import toc from 'markdown-toc'
import defaultImages from './images.json'

let count = 0

export default defineTheme<HairyTheme>((options) => {
  const { vite, extendMd: imageExtendsMd } = extendsImagesConfig(options)
  const { pages, unocss, extendMd: hairyExtendMd } = extendsHairyConfig(options)
  const { extendMd: statisticsExtendsMd } = extendsStatistics()
  const { extendMd: tocExtendsMd } = extendsToc()

  return {
    vite,
    pages,
    unocss,
    extendMd(ctx) {
      hairyExtendMd?.(ctx)
      imageExtendsMd?.(ctx)
      statisticsExtendsMd?.(ctx)
      tocExtendsMd?.(ctx)
    },
    markdown: {
      config(md) {
        md.use(markdownFurigana())
      },
    },
  }
})

function extendsImagesConfig(options: ResolvedValaxyOptions<HairyTheme>): ValaxyExtendConfig {
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

function extendsHairyConfig(options: ResolvedValaxyOptions<HairyTheme>): ValaxyExtendConfig {
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
function extendsStatistics(): ValaxyExtendConfig {
  return {
    extendMd(ctx) {
      const file = fs.readFileSync(ctx.path, 'utf-8')
      const duration = readingTime(file)
      // @ts-expect-error
      delete duration.text
      ctx.route.meta.frontmatter.durations = duration
      ctx.route.meta.frontmatter.length = file.length
    },
  }
}
function extendsToc(): ValaxyExtendConfig {
  return {
    extendMd(ctx) {
      if (!ctx.route.path.startsWith('/posts/'))
        return
      const file = fs.readFileSync(ctx.path, 'utf-8')
      ctx.route.meta.frontmatter['it-toc'] = toc(file).json.map((item: any) => ({
        title: item.content,
        level: item.lvl,
        slug: item.slug,
      }))
    },
  }
}
function removeTags(str = '') {
  let content = str.replace(/<\/?[^>]*>/g, '')// 去除标签
  content = content.replace(/[|]*\n/, '')// 去除行尾空格
  return content
}

