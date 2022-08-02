<template>
  <HairyLayout :header="{ title: `包含标签'${$route.params.tag}'的标签` }">
    <router-view />
  </HairyLayout>
</template>

