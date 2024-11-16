<template>
  <div :class="{ hidden: isHiddenIcon }" class="scroll-bottom-icon">
    <NuxtIcon name="mouse" class="scroll-bottom-icon__icon" />
    <NuxtIcon name="arrow" class="scroll-bottom-icon__icon" />
  </div>
</template>

<script setup lang="ts">
  import { set, useDebounceFn } from '@vueuse/core';
  import { ref, onMounted, onUnmounted } from 'vue';

  const isHiddenIcon = ref(false);

  const handleScroll = useDebounceFn(() => set(isHiddenIcon, window.scrollY > 10), 100);

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

    &__icon {
      height: 36px;
      width: 36px;
    }
  }
</style>
