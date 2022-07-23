import { useThemeConfig } from 'valaxy'
import { computed } from 'vue'
import type { HairyTheme } from '..'

export function usePostLayout() {
  const themeConfig = useThemeConfig<HairyTheme>()
  const layout = computed(() => themeConfig.value.post?.layout || 'text')
  return layout
}
