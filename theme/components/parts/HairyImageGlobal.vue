<script lang="ts" setup>
import { provide, useCssVars } from 'vue'
import { renderOverlay } from '@overlastic/vue'
import type { ImageViewerProps } from 'element-plus'
import { atWillToUnit } from '../../utils'
import HairyImageViewer from './HairyImageViewer.vue'

const props = withDefaults(defineProps<{
  row?: string | number
  col?: string | number
  gap?: string | number
  justify?: string
  align?: string
}>(), {
  row: 'auto',
  col: 'auto',
  gap: 10,
  justify: 'space-evenly',
  align: 'initial',
})

useCssVars(() => ({
  width: atWillToUnit(props.row),
  height: atWillToUnit(props.col),
  gap: atWillToUnit(props.gap),
  justify: props.justify,
  align: props.align,
}))

// TODO global find images
// const slots = useSlots()
// const paths = computed(() => slots
//   .default?.()
//   .map(v => v.props?.src)
//   .filter(Boolean) as string[],
// )

function preview(url: string) {
  // const initialIndex = paths.value.findIndex(v => v === url) || 0
  renderOverlay<Partial<ImageViewerProps>>(HairyImageViewer, {
    urlList: [url],
    initialIndex: 0,
  })
}

provide('HairyImageGroup:preview', preview)
</script>

<template>
  <slot />
</template>
