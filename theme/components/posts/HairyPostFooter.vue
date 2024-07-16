<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="mb-15">
    <div class="border-t border-gray-200 dark:border-gray-600" />
    <div class="flex items-center justify-end mt-2">
      <div class="i-ri-eye-fill mr-2" />
      阅读次数 <span class="waline-pageview-count mx-2" :data-path="route.path" /> 次
    </div>
  </div>
</template>
