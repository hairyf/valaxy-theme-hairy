<template>
  <HairyNav />
  <HairyHeader :title="`发表于'${$route.params.year}年'的文章`" />
  <HairyAside />
  <HairyBody />
  <HairyBackToTop />
</template>

