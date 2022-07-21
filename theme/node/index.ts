import { defineThemePlugin } from 'valaxy'
export * from '../@types'

const safelist = [
  'i-ri-home-line',
  'i-ri-github-line',
]

export default defineThemePlugin(() => {
  return {
    unocss: {
      safelist,
    },
  }
})

