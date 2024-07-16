<script lang="ts" setup>
import { useSiteConfig, useThemeConfig } from 'valaxy'
import { computed } from 'vue'
import type { HairyTheme } from 'valaxy-theme-hairy'

const config = useSiteConfig()
const theme = useThemeConfig<HairyTheme.Config>()

const name = computed(() => theme.value.user?.name || config.value.author.name)
const description = computed(() => theme.value.user?.description || config.value.description)
</script>

<template>
  <div class="pt-5 animate__animated animate__fadeIn relative z-1">
    <div class="flex flex-col items-center">
      <img class="mx-auto w-40 rounded-full -mx-1px" :src="config.author.avatar">
      <div class="leading-loose mt-2">
        {{ name }}
      </div>
      <div class="text-coolgray">
        {{ description }}
      </div>
    </div>
    <HairyUserNav />
  </div>
</template>

<style lang="scss">

</style>
