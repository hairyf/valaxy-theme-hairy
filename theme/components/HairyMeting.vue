<script lang="ts" setup>
import { useAplayer, useThemeConfig } from 'valaxy'

import type { HairyTheme } from 'valaxy-theme-hairy'

const config = useThemeConfig<HairyTheme>()

if (config.value.meting)
  useAplayer()
</script>

<template>
  <meting-js
    v-if="config.meting && config.meting.fixed !== false"
    v-bind="config.meting"
    :fixed="true"
  >
  </meting-js>
</template>
