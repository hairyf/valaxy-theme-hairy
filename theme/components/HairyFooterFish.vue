<!-- eslint-disable no-new -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { RENDERER } from './lib/fish'

const fishContainer = ref()

const tag = useScriptTag('https://cdn.bootcdn.net/ajax/libs/zepto/1.2.0/zepto.min.js')

let renderer: RENDERER

function reset() {
  const color = 'hsl(0, 0%, 95%)'
  if (!renderer)
    renderer = new RENDERER(color)
  else
    renderer.setColor(color)
}

onMounted(() => {
  tag.load()
    .then(reset)
})
</script>

<template>
  <div id="jsi-flying-fish-container" ref="fishContainer" style="margin-top: -60px;"></div>
</template>
