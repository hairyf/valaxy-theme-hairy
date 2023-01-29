import { toggleDark, useThemeConfig } from 'valaxy'
import { useLocalStorage } from '@vueuse/core'

export function setupDefaultDark() {
  const theme = useThemeConfig()
  const local = useLocalStorage('--hairy-mode', '')
  if (theme.value.mode && !local.value) {
    local.value = theme.value.mode
    toggleDark()
  }
}
