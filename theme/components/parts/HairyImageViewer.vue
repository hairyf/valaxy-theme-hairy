<script lang="ts" setup>
import { usePrograms } from '@overlastic/vue'
import { ElImageViewer, imageViewerProps } from 'element-plus'
import 'element-plus/theme-chalk/el-image-viewer.css'
import { onMounted, onUnmounted } from 'vue'

const props = defineProps(imageViewerProps)

const { visible, resolve } = usePrograms({
  duration: 1000,
})

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="HairyImageViewer fixed inset-0 z-2000">
    <ElImageViewer v-if="visible" v-bind="props" @close="resolve()" />
  </div>
</template>
