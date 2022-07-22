<script lang="ts" setup>
import { useConfig } from 'valaxy'
const config = useConfig()
</script>

<template>
  <HairyNav />
  <HairyHeader :headline="config.title" :title="config.author.name" description="good evening, how are you doing?" />
  <HairyBody />
  <HairyBackToTop />
</template>
