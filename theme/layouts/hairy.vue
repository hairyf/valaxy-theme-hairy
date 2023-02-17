<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { pageviewCount } from '@waline/client'
import { useConfig } from 'valaxy'
import { setupDefaultDark } from '../hooks/setupDefaultDark'

const route = useRoute()
const meta = computed(() => route.meta)
const type = computed(() => meta.value.type || '')
const config = useConfig()

onMounted(() => {
  pageviewCount({
    serverURL: config.value.comment.waline.serverURL,
    path: window.location.pathname,
  })
})
setupDefaultDark()
</script>

<template>
  <HairyBackToTop />
  <HairyMeting />
  <HairyUserPopup />
  <home v-if="type === 'home'" />
  <post v-if="type === 'post'" />
  <archives v-if="type === 'archives'" />
  <categories v-if="type === 'categories'" />
  <month v-if="type === 'month'" />
  <tag v-if="type === 'tag'" />
  <tags v-if="type === 'tags'" />
  <year v-if="type === 'year'" />
  <default v-if="type === 'default'" />
</template>

