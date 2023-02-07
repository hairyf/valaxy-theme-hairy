<script lang="ts" setup>
import { capitalize, computed } from 'vue'
import { useConfig, useThemeConfig } from 'valaxy'
import { useI18n } from 'vue-i18n'
import pkg from 'valaxy/package.json'
import HairyFooterFish from './HairyFooterFish.vue'

const { t } = useI18n()

const config = useConfig()
const themeConfig = useThemeConfig()

const year = new Date().getFullYear()

const isThisYear = computed(() => {
  return year === themeConfig.value.footer.since
})

const poweredHtml = computed(() => t('footer.powered', [`<a href="${pkg.repository}" target="_blank" rel="noopener">Valaxy</a> v${pkg.version}`]))
const footerIcon = computed(() => themeConfig.value.footer.icon)
</script>

<template>
  <footer v-if="themeConfig.footer" class="va-footer pt-5" text="center sm" style="color:var(--va-c-text-light); overflow-x: hidden;">
    <div class="z-5 relative">
      <div v-if="themeConfig.footer.beian?.enable && themeConfig.footer.beian.icp" class="beian" m="y-2">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
          {{ themeConfig.footer.beian.icp }}
        </a>
      </div>
      <div class="copyright flex justify-center items-center" p="1">
        <span>
          &copy;
          <template v-if="!isThisYear">
            {{ themeConfig.footer.since }} -
          </template>
          {{ year }}
        </span>

        <a v-if="footerIcon" class="inline-flex animate-pulse ml-2" :href="footerIcon.url" target="_blank" :title="footerIcon.title">
          <div :class="footerIcon.name" />
        </a>

        <span>{{ config.author.name }}</span>
        <span class="mx-2">|</span>
        <span v-if="config.comment.waline" class="flex items-center">
          <div class="i-ri-eye-fill mr-1" />
          <span class="waline-pageview-count" data-path="/">1</span>
        </span>
      </div>
      <div v-if="themeConfig.footer.powered" class="powered" m="2">
        <span v-html="poweredHtml" /> | <span>{{ t('footer.theme') }} - <a :href="themeConfig.pkg.homepage" :title="`valaxy-theme-${config.theme}`" target="_blank">{{ capitalize(config.theme) }}</a> v{{ themeConfig.pkg.version }}</span>
      </div>
    </div>

    <slot />
    <HairyFooterFish />
  </footer>
</template>
