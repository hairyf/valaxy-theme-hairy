<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { isDark, toggleDark } from 'valaxy'

const { t } = useI18n()
const themeTitle = computed(() => {
  return isDark.value ? t('button.toggle_light') : t('button.toggle_dark')
})
</script>

<template>
  <div class="HairyNav fixed w-full h-3.125rem top-0">
    <div class="mx-auto container flex relative z-1">
      <div class="flex-1 flex items-center">
        <HairyNavTitle />
        <HairyMenu />
      </div>
      <div class="flex-center">
        <button class="yun-icon-btn" :title="themeTitle" :style="{ color: isDark ? '' : '#f1cb64' }" @click="toggleDark()">
          <div i="ri-sun-line dark:ri-moon-line" />
        </button>
        <HairyNavSearch />
      </div>
    </div>
    <div class="absolute inset-0 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 blur-5"></div>
  </div>
</template>

<style>

</style>
