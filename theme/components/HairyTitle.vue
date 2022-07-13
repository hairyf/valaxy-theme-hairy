<script lang="ts" setup>
defineProps<{
  headline?: String
  title: String
  description?: string
}>()
</script>

<template>
  <div class="flex-center flex-col text-white text-shadow-lg">
    <div v-if="headline" class="font-frederick text-size-3.35em leading-snug">
      {{ headline }}
    </div>
    <div class="text-size-2.5em font-bold tracking-5">
      {{ title }}
    </div>
    <p v-if="description" class="text-size-sm">
      <template v-if="!$slots.description">
        {{ description }}
      </template>
      <slot v-else name="description" />
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
