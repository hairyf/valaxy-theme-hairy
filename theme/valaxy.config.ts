import { defineTheme } from 'valaxy'

const safelist = [
  'i-ri-home-line',
  'i-ri-github-line',
]

export default defineTheme(() => {
  return {
    vite: {
      plugins: [],
    },
    unocss: {
      safelist,
    },
    // TODO: AUTO GET Title
    extendMd() {
    },
  }
})

