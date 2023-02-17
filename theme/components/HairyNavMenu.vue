<script lang="ts" setup>
import { useContext } from '../hooks/useContext'

const { drawerShow } = useContext()
</script>

<template>
  <button class="yun-icon-btn bg-light-1 p-1 dark:bg-transparent rounded-5" @click="drawerShow = true">
    <div i="ri-menu-fill" />
  </button>
</template>
