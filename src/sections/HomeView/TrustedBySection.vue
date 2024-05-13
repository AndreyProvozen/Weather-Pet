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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::before,
  &::after {
    content: '';
    height: 100%;
    width: 200px;
    top: 0;
    position: absolute;
    z-index: $z-10;
  }

  &::before {
    background: linear-gradient(90deg, #dceeff 10%, rgb(255 255 255 / 0%) 100%);
    left: 0;
  }

  &::after {
    background: linear-gradient(270deg, #dceeff 10%, rgb(255 255 255 / 0%) 100%);
    right: 0;
  }
}
</style>
