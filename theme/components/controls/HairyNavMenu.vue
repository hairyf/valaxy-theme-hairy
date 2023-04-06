<script lang="ts" setup>
import { useGlobalState } from '../../composables'

const { drawerShow } = useGlobalState()
</script>

<template>
  <button class="yun-icon-btn lt-sm:text-size-xl" @click="drawerShow = true">
    <div i="ri-menu-fill" />
  </button>
</template>
