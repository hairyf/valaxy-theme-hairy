import { useThemeConfig } from 'valaxy'
import { createSharedComposable, useStorage } from '@vueuse/core'
import { computed } from 'vue'
import type { HairyPostLayout, HairyTheme } from '..'

const useSharedStorage = createSharedComposable(useStorage)

export function usePostLayout() {
  const themeConfig = useThemeConfig<HairyTheme>()
  const cache = useSharedStorage<HairyPostLayout>('--hairy-theme:post-layout', null)
  const layout = computed({
    get: () => cache.value || themeConfig.value.post?.layout || 'image',
    set: value => cache.value = value,
  })
  return layout
}
