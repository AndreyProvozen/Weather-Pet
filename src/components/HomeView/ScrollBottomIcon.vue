<template>
  <div :class="{ hidden: isHiddenIcon }" class="scroll-bottom-icon">
    <MouseIcon />
    <ArrowIcon />
  </div>
</template>

<script setup lang="ts">
import { ArrowIcon, MouseIcon } from '@/assets/icons';
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
  translate: 50%;
  transition: opacity 0.5s ease;

  &.hidden {
    opacity: 0;
  }
}
</style>
