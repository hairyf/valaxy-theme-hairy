<script lang="ts" setup>
import 'element-plus/theme-chalk/el-drawer.css'
import 'element-plus/theme-chalk/el-overlay.css'

import { ElDrawer } from 'element-plus'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../store'

const route = useRoute()

const { showDrawer } = storeToRefs(useGlobalStore())

watch(() => route.fullPath, () => showDrawer.value = false)
</script>

<template>
  <ElDrawer v-model="showDrawer" :z-index="10000" class="z-100" direction="ltr" size="auto" @close="showDrawer = false">
    <div class="h-24px" />
    <HairyTabbar v-if="route.fullPath.includes('/posts/')" />
    <HairySidebar v-else />
    <div class="dark:hidden absolute inset-0 bg-white bg-opacity-85" />
  </ElDrawer>
</template>

<style lang="scss">
.el-drawer {
    background-color: transparent;
    .el-drawer__header {
      display: none;
    }
    .el-icon.el-drawer__close {
      font-size: 24px;
    }
    @media (max-width: 375px) {
      width: 100% !important;
    }
  }
  .dark {
    .el-drawer {
      background: radial-gradient(black, transparent);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
  }
</style>
