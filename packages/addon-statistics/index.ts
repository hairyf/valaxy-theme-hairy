/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs'
import { defineAddon } from 'valaxy'
import readingTime from 'reading-time'

export default defineAddon(({ options }) => {
  return {
    extendMd(ctx) {
      const file = fs.readFileSync(ctx.path, 'utf-8')
      const duration = readingTime(file, options.readingTime)
      // @ts-expect-errors
      delete duration.text
      ctx.route.meta.frontmatter.durations = duration
      ctx.route.meta.frontmatter.length = file.length
    },
  }
})

