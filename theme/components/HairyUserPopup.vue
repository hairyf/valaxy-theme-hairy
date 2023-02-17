<script lang="ts" setup>
import { ElDrawer } from 'element-plus'
import 'element-plus/es/components/drawer/style/index'
import { useContext } from '../hooks/useContext'
const { drawerShow } = useContext()
</script>

<template>
  <el-drawer v-model="drawerShow" size="auto" @close="drawerShow = false">
    <HairyUserCard />
  </el-drawer>
</template>

<style lang="scss">
  .el-drawer {
    background: radial-gradient(black, transparent);
    .el-icon.el-drawer__close {
      font-size: 24px;
    }
    @media (max-width: 420px) {
      width: 100% !important;
    }
  }
</style>
