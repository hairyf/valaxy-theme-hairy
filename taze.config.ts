import { defineConfig } from 'taze'

const config = defineConfig({
  exclude: [
    '@antfu/eslint-config',
    'eslint',
  ],
})

export default config
