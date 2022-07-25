/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs'
import readingTime from 'reading-time'
import type { ValaxyExtendConfig } from 'valaxy'

function addonStatistics(): ValaxyExtendConfig {
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

export default addonStatistics
