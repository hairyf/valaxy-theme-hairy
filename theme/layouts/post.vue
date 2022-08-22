<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { ElTag } from 'element-plus/es/components/tag/index'
import 'element-plus/es/components/tag/style/index'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
const router = useRouter()

const post = useFrontmatter()

const displayTag = (tag: string) => {
  router.push(`/tags/${tag}`)
}
</script>

<template>
  <HairyLayout :header="{ title: post.title }">
    <template #header-description>
      <div class="text-center">
        {{ post.description }}
      </div>
      <div class="flex gap-2">
        <span>发表于 {{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
        <span>本文字数 {{ (post.length / 1000).toFixed(1) }}k 字</span>
        <span>阅读时长 {{ post.durations.minutes.toFixed(2) }} 分钟</span>
      </div>
      <div v-if="post.tags?.length" class="tags flex-center gap-2 mt-2">
        <el-tag v-for="(tag) in post.tags" :key="tag" class="dark:bg-dark-50 cursor-pointer" @click="displayTag(tag)">
          {{ tag }}
        </el-tag>
      </div>
    </template>
    <router-view />
    <div class="mb-15">
      <div class="border-t border-gray-200 dark:border-gray-600"></div>
      <div class="flex items-center justify-end mt-2">
        <div class="i-ri-eye-fill mr-2" />
        阅读次数 <span class="waline-pageview-count mx-2">1</span> 次
      </div>
    </div>
    <template #body-slide>
      <HairyUserTab />
    </template>
  </HairyLayout>
</template>

<style lang="scss">
</style>
