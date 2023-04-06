<script lang="ts" setup>
import { useAddonWaline } from 'valaxy-addon-waline/client'

const addon = useAddonWaline()
</script>

<template>
  <!-- waline html 挂载点，将其写入布局中 -->
  <WalineClient w="full" :options="addon.options" />
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
