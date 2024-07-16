<script lang="ts" setup>
import { ElTag, dayjs } from 'element-plus'
import { useFrontmatter, useRuntimeConfig } from 'valaxy'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

defineProps<{
  header?: {
    title?: string
    headline?: string
    description?: string
  }
}>()

const runtimeConfig = useRuntimeConfig()
const addonWaline = computed(() => runtimeConfig.value.addons['valaxy-addon-waline'])
const router = useRouter()
const post = useFrontmatter()

function displayTag(tag: string) {
  router.push(`/tags/${tag}`)
}
</script>

<template>
  <HairyContainer>
    <HairyNavbar />
    <HairyHeader :title="post.title">
      <template #description>
        <div class="flex gap-2">
          <span>发表于 {{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
          <span>本文字数 {{ post.wordCount }} 字</span>
          <span>阅读时长 {{ post.readingTime }} 分钟</span>
        </div>
        <div v-if="post.tags?.length" class="tags flex-center gap-2 mt-2">
          <ElTag v-for="(tag) in post.tags" :key="tag" class="dark:bg-dark-50 cursor-pointer" @click="displayTag(tag)">
            {{ tag }}
          </ElTag>
        </div>
      </template>
    </HairyHeader>
    <HairyBody>
      <template #default>
        <HairyImageGlobal>
          <router-view />
        </HairyImageGlobal>
        <HairyPostFooter v-if="addonWaline.options?.pageview" />
      </template>
      <template #slide>
        <HairyTabbar />
      </template>
    </HairyBody>
    <HairyFooter />
  </HairyContainer>
</template>
