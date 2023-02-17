<script lang="ts" setup>
import { useContext } from '../hooks/useContext'

const { drawerShow } = useContext()
</script>

<template>
  <button class="yun-icon-btn" @click="drawerShow = true">
    <div i="ri-menu-fill" />
  </button>
</template>
