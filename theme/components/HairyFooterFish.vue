<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { RENDERER } from './fish'

const fishContainer = ref()

const tag = useScriptTag('https://cdn.bootcdn.net/ajax/libs/zepto/1.2.0/zepto.min.js')
onMounted(() => {
  tag.load()
    .then(() => {
      new RENDERER().init()
    })
})
</script>

<template>
  <div id="jsi-flying-fish-container" ref="fishContainer" style="margin-top: -60px;"></div>
</template>
