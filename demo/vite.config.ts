import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'

const safelist = [
  'i-ri-home-line',
]

export default defineConfig({
  valaxy: {
    unocss: {
      safelist,
    },
  },
})
