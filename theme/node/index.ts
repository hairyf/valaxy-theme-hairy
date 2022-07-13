import { defineThemePlugin } from 'valaxy'
import type { Plugin } from 'vite'
import type { ResolvedValaxyOptions } from 'valaxy'

export * from '../config'
export * from '../types'

export interface UserOptions {
  colors: {
    primary: string
  }
}

// write a vite plugin
// https://vitejs.dev/guide/api-plugin.html
export function themePlugin(options: ResolvedValaxyOptions): Plugin {
  const themeConfig = options.config.themeConfig

  return {
    name: 'valaxy-theme-starter',

    config() {
      return {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `$c-primary: ${themeConfig.colors?.primary || '#0078E7'} !default;`,
            },
          },
        },

        valaxy: {},
      }
    },
  }
}

export default defineThemePlugin((options) => {
  return {
    vite: {
      plugins: [themePlugin(options)],
    },
  }
})

