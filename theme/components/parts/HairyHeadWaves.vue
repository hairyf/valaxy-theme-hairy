<template>
  <svg
    class="waves w-full min-h-100px max-h-150px"
    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"
  >
    <defs>rgba(250,250,250,var(--un-bg-opacity))
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
      <use class="" xlink:href="#gentle-wave" x="48" y="0" fill="var(--hy-c-waves-dimm-1)" />
      <use class="" xlink:href="#gentle-wave" x="48" y="3" fill="var(--hy-c-waves-dimm-2)" />
      <use class="" xlink:href="#gentle-wave" x="48" y="5" fill="var(--hy-c-waves-dimm-3)" />
      <use class="" xlink:href="#gentle-wave" x="48" y="7" fill="var(--hy-c-waves-dimm)" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.waves {
  height: max(100px, min(150px, 15vh));
  margin-bottom: -7px;
}

/* Animation */
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    margin-top: -40px;
    height: 40px;
    min-height: 40px;
  }

}
</style>
