<template>
  <HairyLayout :header="{ title: `发表于'${$route.params.year}年'的文章` }">
    <router-view />
  </HairyLayout>
</template>

