import type { ValaxyExtendConfig } from 'valaxy'

function addonHairy(): ValaxyExtendConfig {
  return {
    extendMd(ctx) {
      if (ctx.route.meta.excerpt)
        ctx.route.meta.frontmatter.text = removeTags(ctx.route.meta.excerpt)
    },
  }
}

export default addonHairy

function removeTags(str = '') {
  let content = str.replace(/<\/?[^>]*>/g, '')// 去除标签
  content = content.replace(/[|]*\n/, '')// 去除行尾空格
  return content
}
