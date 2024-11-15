<template>
  <div v-if="!weatherData">Loading...</div>
  <div v-else-if="weatherData" class="container">
    <div class="city-view">
      <div class="left-weather">
        <SearchSection />
        <OverviewSection />
      </div>
      <WeatherForecastSection />
    </div>
    <div style="display: flex; gap: 20px">
      <WindCard
        :units="weatherData.units"
        :speed="weatherData.current.wind_speed_10m"
        :gust="weatherData.current.wind_gusts_10m"
        :direction-in-degrees="weatherData.current.wind_direction_10m"
      />
      <div style="display: flex; flex-direction: column; gap: 20px">
        <OverviewCard v-for="card in sunData" :key="card.title" v-bind="card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAsyncData, useRoute } from 'nuxt/app';
  import { computed } from 'vue';
  import dayjs from 'dayjs';
  import SearchSection from '@/sections/CityView/SearchSection.vue';
  import { useWeatherStore } from '@/stores/weather';
  import { OverviewCard, WindCard } from '@/components';
  import OverviewSection from '@/sections/CityView/OverviewSection.vue';
  import WeatherForecastSection from '@/sections/CityView/WeatherForecastSection.vue';

  const {
    query: { lat, lon },
  } = useRoute();

  const { fetchFullWeatherData, weatherData } = useWeatherStore();

  useAsyncData('weatherData', () => fetchFullWeatherData({ lat, lon }));

  const sunData = computed(() => [
    { icon: 'sunset', title: 'Sunset', value: dayjs(weatherData?.daily?.sunset?.[0]).format('HH:mm') || 'N/A' },
    { icon: 'sunrise', title: 'Sunrise', value: dayjs(weatherData?.daily?.sunrise?.[0]).format('HH:mm') || 'N/A' },
  ]);
</script>

<style scoped lang="scss">
  .city-view {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: 20px 0;
    min-height: calc(100vh - 90px);

    @media (max-width: $breakpoint-lg) {
      flex-direction: column;
      min-height: auto;
    }
  }
</style>
