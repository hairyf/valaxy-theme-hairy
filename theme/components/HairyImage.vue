<script lang="ts" setup>
import { ElImage, imageProps } from 'element-plus/es/components/image/index'
import 'element-plus/es/components/image/style/index'
import { inject } from 'vue'
const props = defineProps(imageProps)

const preview = inject<(url: string) => void>('HairyImageGroup:preview')
</script>

<template>
  <ElImage v-bind="props" class="HairyImage" :class="[preview && 'cursor-pointer rounded']" @click="preview?.(src)" />
</template>

<style lang="scss" scoped></style>
