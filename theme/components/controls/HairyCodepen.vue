<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps<{
    height: number | string
    defaultTab: string
    slugHash: string
    user?: string
    prefill?: Record<string, any>
    title?: string
    placeholder?: string
    theme?: string
  }>(),
  {
    height: 300,
    defaultTab: 'html',
  },
)

useScriptTag('https://cpwebassets.codepen.io/assets/embed/ei.js')
</script>

<template>
  <div
    class="codepen"
    :data-height="300"
    :data-default-tab="defaultTab"
    :data-slug-hash="slugHash"
    :data-user="user"
    :data-prefill="prefill"
    :data-pen-title="title"
    :data-placeholder="placeholder"
    :data-theme-id="theme"
  />
</template>

<style lang="scss" scoped>
</style>
