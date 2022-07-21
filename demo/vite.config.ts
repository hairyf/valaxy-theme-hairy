import { defineConfig } from 'vite'
import pluginVueJsx from '@vitejs/plugin-vue-jsx'

// import { VitePWA } from 'vite-plugin-pwa'

const safelist = [
  'i-ri-home-line',
  'i-ri-github-line',
]

export default defineConfig({
  plugins: [
    pluginVueJsx(),
  ],
  valaxy: {
    unocss: {
      safelist,
    },
  },
})
