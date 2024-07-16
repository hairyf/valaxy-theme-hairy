<template>
  <HairyContainer>
    <HairyNavbar />
    <HairyHeader :title="`包含标签'${$route.params.tag}'的标签`" />
    <HairyBody>
      <router-view />
    </HairyBody>
    <HairyFooter />
  </HairyContainer>
</template>
