<script lang="ts" setup>
import { ElTabPane, ElTabs } from 'element-plus/es/components/tabs/index'
import 'element-plus/es/components/tabs/style/index'
import 'element-plus/es/components/tab-pane/style/index'
import { provide, ref } from 'vue'
const active = ref('aside')
provide('HairyUserTab:active', active)
</script>

<template>
  <el-tabs v-model="active" class="pt-3">
    <el-tab-pane name="aside">
      <template #label>
        <div class="flex items-center">
          <div class="i-ri-list-check-2" />
          <span class="ml-1">Aside</span>
        </div>
      </template>
      <HairyToc />
    </el-tab-pane>
    <el-tab-pane label="Series" name="series">
      <template #label>
        <div class="flex items-center gap-1">
          <div class="i-ri-flow-chart" />
          <span class="ml-1">Series</span>
        </div>
      </template>
      <HairyArticleSeries />
    </el-tab-pane>
    <el-tab-pane label="User" name="user">
      <template #label>
        <div class="flex items-center gap-1">
          <div class="i-ri-user-line" />
          <span class="ml-1">User</span>
        </div>
      </template>
      <HairyUserCard />
    </el-tab-pane>
  </el-tabs>
</template>
