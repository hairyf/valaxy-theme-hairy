<script lang="ts" setup>
import type { HairyTheme } from 'valaxy-theme-hairy'
import { useThemeConfig } from 'valaxy'
import { computed } from 'vue'

const themeConfig = useThemeConfig<HairyTheme.Config>()
const nav = computed(() => themeConfig.value.nav || [])
</script>

<template>
  <div class="flex items-center h-12.5">
    <HairyMenuItem v-for="(item, index) in nav" :key="index" :item="item" />
  </div>
</template>

<style lang="scss" scoped></style>
