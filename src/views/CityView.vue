<template>
  <div v-if="weatherData && currentWeather" class="container">
    <div class="city-view">
      <div class="left-weather">
        <SearchSection />
        <OverviewSection />
      </div>
      <WeatherForecastSection />
    </div>
    <WindCard
      :speed="currentWeather.wind_speed_10m"
      :gust="currentWeather.wind_gusts_10m"
      :direction-in-degrees="currentWeather.wind_direction_10m"
    />
    >
  </div>
</template>

<script setup lang="ts">
  import { type LocationQueryValue, useRoute } from 'vue-router';
  import { computed, onMounted } from 'vue';
  import { useStore } from '@/store';

  import { SearchSection, OverviewSection, WeatherForecastSection } from '@/sections';
  import { WindCard } from '@/components';

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
  const currentWeather = computed(() => weatherData.value?.current);
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
