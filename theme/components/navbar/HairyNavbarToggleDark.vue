<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useAppStore } from 'valaxy'

const { t } = useI18n()
const appStore = useAppStore()
const dark = computed(() => appStore.isDark)

const themeTitle = computed(() => {
  return dark.value ? t('button.toggle_light') : t('button.toggle_dark')
})
</script>

<template>
  <button
    class="yun-icon-btn bg-light-1 p-1 dark:bg-transparent rounded-5 lt-sm:text-size-xl"
    :title="themeTitle" :style="{ color: dark ? '' : '#f1cb64' }" @click="($event) => appStore.toggleDarkWithTransition($event, { duration: 600, easing: 'ease-in-out' })"
  >
    <div i="ri-sun-line dark:ri-moon-line" />
  </button>
</template>
