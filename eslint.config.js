import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'vue/no-template-shadow': 'off',
    'node/prefer-global/buffer': 'off',
    'vue/valid-template-root': 'off',
    'node/handle-callback-err': 'off',
  },
})
