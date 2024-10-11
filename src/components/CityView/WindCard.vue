<template>
  <ForecastCardWrapper style="width: 50%" :icon="UVIndexIcon" title="Wind">
    <div style="display: flex; gap: 16px; justify-content: space-between">
      <div>
        <p class="m-0">Speed: {{ Math.round(speed) }}</p>
        <p class="m-0">Gust: {{ Math.round(gust) }}</p>
      </div>
      <Compass :direction-in-degrees="directionInDegrees" />
    </div>
  </ForecastCardWrapper>
</template>

<script setup lang="ts">
  import { UVIndexIcon } from '@/assets/icons';
  import ForecastCardWrapper from './ForecastCardWrapper.vue';
  import Compass from './Compass.vue';

  interface Props {
    speed: number;
    gust: number;
    directionInDegrees: number;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss"></style>
