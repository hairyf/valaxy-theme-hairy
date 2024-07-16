<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../../store'

const { showDrawer } = storeToRefs(useGlobalStore())
</script>

<template>
  <button class="yun-icon-btn lt-sm:text-size-xl" @click="showDrawer = !showDrawer">
    <div i="ri-menu-fill" />
  </button>
</template>
