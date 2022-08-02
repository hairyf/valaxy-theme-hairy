<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const meta = computed(() => route.meta)
const type = computed(() => meta.value.type || '')
console.log(type.value)
</script>

<template>
  <HairyBackToTop />
  <HairyMeting />
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

