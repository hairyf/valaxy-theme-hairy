<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <HairySearchBtnDisplay @click="visible = true" />
  <HairyFuseSearchDialog v-model:visible="visible" />
</template>
