import { defineTheme } from 'valaxy'
import type { HairyTheme } from 'theme'

export default defineTheme<HairyTheme>(() => {
  return {
    // TODO: AUTO GET Title
    extendMd(ctx) {
      if (ctx.route.meta.excerpt)
        ctx.route.meta.frontmatter.text = removeTags(ctx.route.meta.excerpt)
    },
  }
})

function removeTags(str = '') {
  let content = str.replace(/<\/?[^>]*>/g, '')// 去除标签
  content = content.replace(/[|]*\n/, '')// 去除行尾空格
  return content
}
