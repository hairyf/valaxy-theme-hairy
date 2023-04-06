<script lang="ts" setup>
defineProps<{
  count?: number
}>()
</script>

<template>
  <div class="flex-center flex-col cursor-pointer hover:text-primary px-3 py-1">
    <div class="font-bold leading-none">
      {{ count || 0 }}
    </div>
    <div class="leading-none mt-1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
