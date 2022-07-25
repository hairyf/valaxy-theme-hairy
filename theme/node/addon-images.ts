import path from 'path'
import fs from 'fs'
import type { ResolvedValaxyOptions, ValaxyExtendConfig } from 'valaxy'
import YAML from 'yaml'

let count = 0

function addonImages(options: ResolvedValaxyOptions): ValaxyExtendConfig {
  const images = loadImageYaml(options.userRoot, options.themeRoot)
  return {
    extendMd(ctx) {
      if (images.length >= 6) {
        if (!ctx.route.meta.frontmatter.image)
          ctx.route.meta.frontmatter.image = images[count]
        if (count <= images.length)
          count++
        if (count >= images.length)
          count = 0
      }
    },
  }
}

export default addonImages

function loadImageYaml(userRoot: string, themeRoot: string): string[] {
  const imageYaml = path.join(userRoot, 'images.yml')
  const defaultYaml = path.join(themeRoot, 'images.yml')
  if (fs.existsSync(imageYaml)) {
    const images: string[] = YAML.parse(fs.readFileSync(imageYaml, 'utf-8'))
    if (images.length > 6)
      return images
  }
  const images = YAML.parse(fs.readFileSync(defaultYaml, 'utf-8'))
  fs.writeFileSync(imageYaml, YAML.stringify(images))
  return images
}
