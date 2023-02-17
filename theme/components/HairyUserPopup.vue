<script lang="ts" setup>
import 'element-plus/es/components/drawer/style/index'
import { ElDrawer } from 'element-plus/es/components/drawer/index'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { useContext } from '../hooks/useContext'
const { drawerShow } = useContext()
const route = useRoute()
const isPost = computed(() => route.fullPath.includes('/posts/'))

watch(() => route.fullPath, () => {
  drawerShow.value = false
})
</script>

<template>
  <el-drawer v-model="drawerShow" direction="ltr" size="auto" @close="drawerShow = false">
    <HairyUserTab v-if="isPost" />
    <HairyUserCard v-else />
    <div class="dark:hidden absolute inset-0 bg-white bg-opacity-85 blur-5" />
  </el-drawer>
</template>

<style lang="scss">
  .el-drawer {
    .el-drawer__header {
      display: none;
    }

    background-color: transparent;
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

    }
  }
</style>
