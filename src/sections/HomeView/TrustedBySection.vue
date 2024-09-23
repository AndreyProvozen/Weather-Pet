<template>
  <h2 class="section-title">Trusted By</h2>
  <div class="container trusted-section">
    <TrustedBy />
    <TrustedBy :is-direction-right="true" />
  </div>
</template>

<script setup lang="ts">
import TrustedBy from '@/components/HomeView/TrustedBy.vue';
</script>

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
  }

  &::before {
    background: linear-gradient(90deg, #dceeff 10%, rgb(255 255 255 / 0%) 100%);
    left: 0;

    @media (max-width: $breakpoint-xsm) {
      display: none;
    }
  }

  &::after {
    background: linear-gradient(270deg, #dceeff 10%, rgb(255 255 255 / 0%) 100%);
    right: 0;

    @media (max-width: $breakpoint-xsm) {
      display: none;
    }
  }
}
</style>
