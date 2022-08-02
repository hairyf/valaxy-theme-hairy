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
  <div class="HairyLayout">
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
  </div>
</template>
