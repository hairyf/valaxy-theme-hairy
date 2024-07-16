<script lang="ts" setup>
import { ElImage, imageProps } from 'element-plus'
import 'element-plus/theme-chalk/el-image.css'
import { inject } from 'vue'

const props = defineProps(imageProps)

const preview = inject<any>('HairyImageGroup:preview', undefined)
</script>

<template>
  <ElImage v-bind="props" class="HairyImage" :class="[preview && 'cursor-pointer rounded']" @click="preview?.(src)" />
</template>

<style lang="scss" scoped></style>
