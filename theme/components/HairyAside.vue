<script lang="ts" setup>
import { useData, useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
const data = useData()

console.log('data: ', data)
console.log('frontmatter: ', frontmatter.value)
</script>

<template>
  <div></div>
</template>
