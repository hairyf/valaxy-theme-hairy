<script lang="ts" setup>
import { useGlobalState } from 'composables/global'

defineProps<{}>()
const { headerRef } = useGlobalState()
</script>

<template>
  <header ref="headerRef" class="relative animate__animated animate__fadeIn">
    <div class="h-30vh lt-md:h-60vh min-h-80 flex-center">
      -
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
