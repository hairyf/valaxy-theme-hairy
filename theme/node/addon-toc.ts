import fs from 'fs'
import type { ValaxyExtendConfig } from 'valaxy'
import toc from 'markdown-toc'

function addonToc(): ValaxyExtendConfig {
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

export default addonToc
