import path from 'path'
import fs from 'fs'
import YAML from 'yaml'
import { defineAddon } from 'valaxy'

export default defineAddon((_, { userRoot }) => {
  const images = loadImageYaml(userRoot)
  let count = 0
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
})

function loadImageYaml(userRoot: string): string[] {
  const imageYaml = path.join(userRoot, 'images.yml')
  const defaultYaml = path.join(__dirname, 'images.yml')
  if (fs.existsSync(imageYaml)) {
    const images: string[] = YAML.parse(fs.readFileSync(imageYaml, 'utf-8'))
    if (images.length > 6)
      return images
  }
  const images = YAML.parse(fs.readFileSync(defaultYaml, 'utf-8'))
  fs.writeFileSync(imageYaml, YAML.stringify(images))
  return images
}
