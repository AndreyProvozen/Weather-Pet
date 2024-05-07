<template>
  <h2 class="section-title">Trusted By</h2>
  <div class="container trusted-wrapper">
    <TrustedBy />
    <TrustedBy :is-direction-right="true" />
  </div>
</template>

<script setup lang="ts">
import TrustedBy from '@/components/HomeView/TrustedBy.vue';
</script>

<style scoped lang="scss">
.trusted-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::before {
    background: linear-gradient(90deg, #dceeff 10%, rgb(255 255 255 / 0%) 100%);
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    width: 200px;
    z-index: $z-10;
  }

  &::after {
    background: linear-gradient(270deg, #dceeff 10%, rgb(255 255 255 / 0%) 100%);
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    z-index: $z-10;
  }
}
</style>
