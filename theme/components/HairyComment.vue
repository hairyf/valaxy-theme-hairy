<script lang="ts" setup>
import { useAddonWaline } from 'valaxy-addon-waline'

const addon = useAddonWaline()
</script>

<template>
  <WalineClient w="full" :options="addon.options" />
</template>

<style lang="scss">
// 可以在此处覆盖 waline 样式
:root {
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
