<script lang="ts" setup>
import { computed, provide, useCssVars, useSlots } from 'vue'
import { executeOverlay } from 'unoverlay-vue'
import type { ImageViewerProps } from 'element-plus/es/components/image-viewer/index'
import type { AtWillNumber } from '../utils'
import { atWillToUnit } from '../utils'
import HairyImageViewer from './HairyImageViewer.vue'

const props = withDefaults(defineProps<{
  row?: AtWillNumber
  col?: AtWillNumber
  gap?: AtWillNumber
  justify?: string
  align?: string
}>(),
{
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

const slots = useSlots()
const paths = computed(() => slots
  .default?.()
  .map(v => v.props?.src)
  .filter(Boolean) as string[],
)

const preview = (url: string) => {
  const initialIndex = paths.value.findIndex(v => v === url) || 0
  executeOverlay<Partial<ImageViewerProps>>(HairyImageViewer, {
    props: {
      urlList: paths.value,
      initialIndex,
    },
  })
}

provide('HairyImageGroup:preview', preview)
</script>

<template>
  <div class="HairyImageGroup">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.HairyImageGroup {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--width, auto));
  gap: var(--gap);
  justify-content: var(--justify);
   align-items: var(--align);
  :deep(.HairyImage) {
    height: var(--height, auto);
  }
}
</style>
