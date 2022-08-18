<script lang="ts" setup>
import { useConfig } from 'valaxy'
import { useWaline } from 'valaxy/client/composables/comments/waline'
// 读取用户配置
const config = useConfig()
// 挂载 Waline
useWaline({
  el: '#waline',
  emoji: [
    '//unpkg.com/@waline/emojis@1.0.1/weibo',
    '//unpkg.com/@waline/emojis@1.0.1/bilibili',
  ],
  ...config.value.comment.waline,
})
</script>

<!-- Also, the documentation doesn't state that we need to install @waline/client, which I think is also an issue -->
<template>
  <!-- waline html 挂载点，将其写入布局中 -->
  <div id="waline" w="full" />
</template>

<style lang="scss">
// 可以在此处覆盖 waline 样式
#waline {
  --waline-theme-color: var(--hy-c-primary);
  --waline-active-color: var(--hy-c-primary-dark)
}
.wl-editor {
  padding: 4px;
  width: calc(100% - 1rem - 8px);
}
.wl-emoji-popup {
  border-bottom: none !important;
  z-index: 1000;
}
.wl-emoji-popup .wl-tabs {
  height: auto !important;
  overflow-x: auto !important;
  padding: 0 !important;
  margin-left: -1px;
  margin-right: -1px;
}
</style>
