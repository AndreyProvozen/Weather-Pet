<template>
  <div :class="{ hidden: isHiddenIcon }" class="scroll-bottom-icon">
    <nuxt-icon name="mouse" />
    <nuxt-icon name="arrow" />
  </div>
</template>

<script setup lang="ts">
  import { set } from '@vueuse/core';
  import { ref, onMounted, onUnmounted } from 'vue';

  const isHiddenIcon = ref(false);

  const handleScroll = () => set(isHiddenIcon, window.scrollY > 10);

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style lang="scss" scoped>
  .scroll-bottom-icon {
    animation: bounce 2s infinite;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 50%;
    transition: opacity 0.5s ease;
    translate: 50%;

    &.hidden {
      opacity: 0;
    }
  }
</style>
