<script lang="ts" setup>
import { ElDrawer } from 'element-plus/es/components/drawer/index'
import 'element-plus/es/components/drawer/style/index'
import { useContext } from '../hooks/useContext'
const { drawerShow } = useContext()
</script>

<template>
  <el-drawer v-model="drawerShow" size="auto" @close="drawerShow = false">
    <HairyUserCard />
    <div class="dark:hidden absolute inset-0 bg-white bg-opacity-85 blur-5" />
  </el-drawer>
</template>

<style lang="scss">
  .el-drawer {
    .el-drawer__header {
      position: relative;
      z-index: 1;
    }

    background-color: transparent;
    .el-icon.el-drawer__close {
      font-size: 24px;
    }
    @media (max-width: 420px) {
      width: 100% !important;
    }
  }
  .dark {
    .el-drawer {
      background: radial-gradient(black, transparent);
    }
  }
</style>
