import path from 'path'
import fs from 'fs'
import { defineTheme } from 'valaxy'
import YAML from 'yaml'
import type { HairyTheme } from 'theme'

const safelist = [
  'i-ri-home-line',
  'i-ri-github-line',
]

export default defineTheme<HairyTheme>((options) => {
  const images = loadImageYaml(options)
  let count = 0
  return {
    unocss: {
      safelist,
    },
    // TODO: AUTO GET Title
    extendMd(ctx) {
      if (ctx.route.meta.excerpt)
        ctx.route.meta.frontmatter.text = filterHtmlTag(ctx.route.meta.excerpt)

      if (images.length >= 6) {
        if (!ctx.route.meta.frontmatter.image)
          ctx.route.meta.frontmatter.image = images[count]
        if (count <= images.length)
          count++
        if (count >= images.length)
          count = 0

        ctx.route.meta.frontmatter.count = ctx.route.meta.excerpt.length || '2000'
      }
    },
  }
})

interface LoadImageYmlOptions {
  userRoot: string
  themeRoot: string
}

function loadImageYaml(options: LoadImageYmlOptions): string[] {
  const imageYaml = path.join(options.userRoot, 'images.yml')
  const defaultYaml = path.join(options.themeRoot, 'images.yml')
  if (fs.existsSync(imageYaml)) {
    const images: string[] = YAML.parse(fs.readFileSync(imageYaml, 'utf-8'))
    if (images.length > 6)
      return images
  }
  const images = YAML.parse(fs.readFileSync(defaultYaml, 'utf-8'))
  fs.writeFileSync(imageYaml, YAML.stringify(images))
  return images
}

function filterHtmlTag(str = '') {
  let content = str.replace(/<\/?[^>]*>/g, '')// 去除标签
  content = content.replace(/[|]*\n/, '')// 去除行尾空格
  return content
}
