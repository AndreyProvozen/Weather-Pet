<template>
  <div v-if="weatherData" class="container city-view">
    <div class="left-weather">
      <SearchSection />
      <OverviewSection />
    </div>
    <WeatherForecastSection />
  </div>
</template>

<script setup lang="ts">
import { type LocationQueryValue, useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from '@/store';

import { SearchSection, OverviewSection, WeatherForecastSection } from '@/sections';

const route = useRoute();
const {
  dispatch,
  state: { weather },
} = useStore();

onMounted(() => {
  const lat = route.query.lat as LocationQueryValue;
  const lon = route.query.lon as LocationQueryValue;
  dispatch('fetchFullWeatherData', { lat, lon });
});

const weatherData = computed(() => weather.weatherData);
</script>

<style scoped lang="scss">
.city-view {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: 20px;
  min-height: calc(100vh - 90px);

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
    min-height: auto;
  }
}
</style>
