<script lang="ts" setup>
import { useConfig } from 'valaxy'
const config = useConfig()
</script>

<template>
  <div class="sticky top-3.125rem">
    <img class="mx-auto w-40 rounded-full " :src="config.author.avatar" />
  </div>
</template>
