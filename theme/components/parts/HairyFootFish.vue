<!-- eslint-disable no-new -->
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { useAppStore } from 'valaxy'
import { RENDERER } from './HairyFootFish'

const fishContainer = ref()

const tag = useScriptTag('https://cdn.bootcdn.net/ajax/libs/zepto/1.2.0/zepto.min.js')
const appStore = useAppStore()
const dark = computed(() => appStore.isDark)

let renderer: RENDERER

function reset() {
  const color = dark.value ? 'hsl(0, 0%, 95%)' : 'hsl(0, 0%, 80%)'
  if (!renderer)
    renderer = new RENDERER(color)
  else
    renderer.setColor(color)
}

onMounted(() => {
  tag.load()
    .then(reset)
})
watch(dark, reset)
</script>

<template>
  <div
    id="jsi-flying-fish-container"
    ref="fishContainer"
    class="z-1 relative"
    style="margin-top: -60px;"
  />
</template>
