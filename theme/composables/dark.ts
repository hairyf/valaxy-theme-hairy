import { useAppStore, useThemeConfig } from 'valaxy'
import { onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { ThemeConfig } from 'valaxy-theme-hairy'

export function setupDefaultDark() {
  const theme = useThemeConfig<ThemeConfig>()
  const appStore = useAppStore()
  const local = useLocalStorage('--hairy-mode', '')
  onMounted(() => {
    if (theme.value.theme && !local.value) {
      appStore.isDark = theme.value.theme === 'dark'
      local.value = theme.value.theme
    }
  })
}
