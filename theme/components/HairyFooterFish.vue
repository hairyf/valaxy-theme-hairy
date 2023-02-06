<script lang="ts" setup>
import { ref } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { RENDERER } from './fish'

const fishContainer = ref()

const tag = useScriptTag('https://cdn.bootcdn.net/ajax/libs/zepto/1.2.0/zepto.min.js')
tag.load()
  .then(() => {
    RENDERER.init()
  })
</script>

<template>
  <div id="jsi-flying-fish-container" ref="fishContainer" style="margin-top: -60px;"></div>
</template>
