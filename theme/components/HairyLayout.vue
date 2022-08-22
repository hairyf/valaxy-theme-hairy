<script lang="ts" setup>
defineProps<{
  header?: {
    title?: string
    headline?: string
    description?: string
  }
}>()
</script>

<template>
  <div class="HairyLayout min-h-80vh">
    <HairyNav />
    <HairyHeader v-bind="header">
      <template #description>
        <slot name="header-description" />
      </template>
    </HairyHeader>
    <HairyBody>
      <slot />

      <template v-if="$slots['body-slide']" #slide>
        <slot name="body-slide" />
      </template>
    </HairyBody>
    <HairyFooter class="z-1 relative" />
  </div>
</template>
