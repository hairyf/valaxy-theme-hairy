<template>
  <div class="HairyNav fixed w-full h-3.125rem top-0 z-10">
    <div class="mx-auto container flex relative z-1">
      <div class="flex-1 flex items-center">
        <HairyNavTitle />
        <HairyMenu />
      </div>
      <div class="flex-center">
        <HairyNavToggleDark />
        <HairyNavSearch />
      </div>
    </div>
    <HairyNavBackground />
  </div>
</template>

<style>
</style>
