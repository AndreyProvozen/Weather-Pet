<template>
  <div ref="qualityCardRef" class="quality-card">
    <div class="quality-card__wrapper">
      <h3 class="m-0 quality-card__title">{{ title }}</h3>
      <number-animation
        v-if="startAnimation"
        class="quality-card__animated-number"
        :format="formatNumber"
        :from="animatedNumber.from"
        :to="animatedNumber.to"
        :duration="2"
      />
      <div v-else class="quality-card__animated-number">0%</div>
      <p class="m-0">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { get, set, useElementVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';
import NumberAnimation from 'vue-number-animation';

interface Props {
  title: string;
  description: string;
  animatedNumber: { from: number; to: number };
}

defineProps<Props>();

const qualityCardRef = ref(null);
const startAnimation = ref(false);

const targetIsVisible = useElementVisibility(qualityCardRef, { threshold: 0.5 });

watch(targetIsVisible, () => {
  if (get(targetIsVisible)) set(startAnimation, true);
});

const formatNumber = (value: number) => `${value.toFixed(0)}%`;
</script>

<style scoped lang="scss">
.quality-card {
  align-items: center;
  background: $gray;
  border-radius: 20px;
  display: flex;
  flex-basis: calc(33.333% - 20px);
  height: 350px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    animation: spin 6s linear infinite;
    content: '';
    height: 600px;
    position: absolute;
    width: 600px;
  }

  &::before {
    background-image: conic-gradient(transparent, transparent, transparent, $purple);
  }

  &::after {
    animation-delay: -3s;
    background-image: conic-gradient(transparent, transparent, transparent, $turquoise);
  }

  &__wrapper {
    align-items: center;
    background-color: $white;
    border-radius: 16px;
    color: $black;
    display: flex;
    flex-direction: column;
    inset: 4px;
    justify-content: center;
    padding: 16px;
    position: absolute;
    text-align: center;
    z-index: $z-10;
  }

  &__title {
    font-weight: 600;
  }

  &__animated-number {
    color: $turquoise;
    font-size: 45px;
    font-weight: 600;
    line-height: 1;
    margin: 10px 0;
  }

  @media (max-width: $breakpoint-lg) {
    flex-basis: calc(50% - 20px);
  }
  @media (max-width: $breakpoint-sm) {
    flex-basis: 100%;
    max-width: 400px;
  }
}
</style>
