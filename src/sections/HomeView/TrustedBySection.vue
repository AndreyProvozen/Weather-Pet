<template>
  <section>
    <h2 class="section-title">Trusted By</h2>
    <div class="container trusted-section">
      <TrustedBy />
      <TrustedBy :is-direction-right="true" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .trusted-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &::before,
    &::after {
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      width: 200px;
      z-index: $z-10;

      @media (max-width: $breakpoint-xsm) {
        display: none;
      }
    }

    &::before {
      background: linear-gradient(90deg, $light-blue 10%, transparent 100%);
      left: 0;
    }

    &::after {
      background: linear-gradient(270deg, $light-blue 10%, transparent 100%);
      right: 0;
    }
  }
</style>
