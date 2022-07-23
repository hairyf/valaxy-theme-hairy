<template>
  <div class="HairyBody min-h-100vh">
    <div class="mx-auto container flex">
      <div class="flex-1 pt-2">
        <router-view />
        <HairyWaline />
      </div>
      <div class="ml-4 w-60 lg:block hidden">
        <HairyUserCard class="w-60" />
      </div>
    </div>
  </div>
</template>

<style>
  .a {
    overflow: hidden;
  }
</style>
