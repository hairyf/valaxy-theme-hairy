import { useThemeConfig } from 'valaxy'
import { createSharedComposable, useStorage } from '@vueuse/core'
import { computed } from 'vue'
import type { HairyTheme } from '../types'

const useSharedStorage = createSharedComposable(useStorage)

export function useLayoutPost() {
  const themeConfig = useThemeConfig<HairyTheme.Config>()
  const cache = useSharedStorage<HairyTheme.Layout['post']>('--hairy-theme:post-layout', null)
  const layout = computed({
    get: () => cache.value || themeConfig.value.layout?.post || 'image',
    set: value => cache.value = value,
  })
  return layout
}
