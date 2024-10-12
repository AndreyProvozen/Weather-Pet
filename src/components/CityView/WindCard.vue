<template>
  <ForecastCardWrapper style="width: max-content" :icon="WindIcon" title="Wind">
    <div class="wind-card">
      <div class="wind-card__info-wrapper">
        <h4>Speed: {{ Math.round(speed) }} {{ units.wind }}</h4>
        <h4>Gust: {{ Math.round(gust) }} {{ units.wind }}</h4>
        <h4>
          Direction: {{ directionInDegrees }}
          <span style="font-size: 24px">{{ units.degree }}</span>
        </h4>
      </div>
      <div class="wind-card__vertical-line" />
      <Compass :direction-in-degrees="directionInDegrees" />
    </div>
  </ForecastCardWrapper>
</template>

<script setup lang="ts">
  import { WindIcon } from '@/assets/icons';
  import ForecastCardWrapper from './ForecastCardWrapper.vue';
  import Compass from './Compass.vue';

  interface Props {
    speed: number;
    gust: number;
    directionInDegrees: number;
    units: Record<string, string>;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .wind-card {
    align-items: center;
    display: flex;
    gap: 40px;
    justify-content: space-between;

    &__vertical-line {
      background-color: $white;
      height: 65px;
      width: 2px;
    }

    &__info-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2px;

      h4 {
        font-weight: 400;
        margin: 0;
        text-wrap: nowrap;
      }
    }
  }
</style>
