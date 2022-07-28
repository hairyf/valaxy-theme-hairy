<script lang="ts" setup>
import { useConfig } from 'valaxy'
defineProps<{
  header?: {
    title?: string
    headline?: string
    description?: string
  }
}>()
</script>

<template>
  <div class="HairyLayout">
    <HairyNav />
    <HairyHeader v-bind="header">
      <template #description>
        <slot name="header-description" />
      </template>
    </HairyHeader>
    <HairyBody>
      <slot />
    </HairyBody>
    <HairyBackToTop />
  </div>
</template>
