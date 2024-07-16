<script lang="ts" setup>
import { ElTabPane, ElTabs } from 'element-plus'
import 'element-plus/theme-chalk/el-tabs.css'
import 'element-plus/theme-chalk/el-tab-pane.css'
import { computed, provide, ref } from 'vue'

import type { DefaultTheme } from 'valaxy/types'
import { useFrontmatter, useThemeConfig } from 'valaxy'

const active = ref('aside')

const frontmatter = useFrontmatter()
const themeConfig = useThemeConfig()

const pageOutline = computed<DefaultTheme.Config['outline']>(
  () => frontmatter.value.outline ?? themeConfig.value.outline,
)

const pageOutlineNotUndefined = computed(() =>
  typeof pageOutline.value !== 'undefined',
)

provide('HairyUserTab:active', active)
</script>

<template>
  <ElTabs v-model="active" class="pt-3">
    <ElTabPane v-if="pageOutlineNotUndefined" name="aside">
      <template #label>
        <div class="flex items-center">
          <div class="i-ri-list-check-2" />
          <span class="ml-1">Aside</span>
        </div>
      </template>
      <HairyOutline />
    </ElTabPane>
    <ElTabPane label="Series" name="series">
      <template #label>
        <div class="flex items-center gap-1">
          <div class="i-ri-flow-chart" />
          <span class="ml-1">Series</span>
        </div>
      </template>
      <HairyArticleSeries />
    </ElTabPane>
    <ElTabPane label="User" name="user">
      <template #label>
        <div class="flex items-center gap-1">
          <div class="i-ri-user-line" />
          <span class="ml-1">User</span>
        </div>
      </template>
      <HairySidebar />
    </ElTabPane>
  </ElTabs>
</template>
