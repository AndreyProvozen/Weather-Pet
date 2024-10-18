<template>
  <div v-if="weatherData && currentWeather" class="container">
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
        :speed="currentWeather.wind_speed_10m"
        :gust="currentWeather.wind_gusts_10m"
        :direction-in-degrees="currentWeather.wind_direction_10m"
      />
      <div style="display: flex; flex-direction: column; gap: 20px">
        <OverviewCard v-for="card in sunData" :key="card.title" v-bind="card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type LocationQueryValue, useRoute } from 'vue-router';
  import { computed, onMounted } from 'vue';
  import { useStore } from '@/store';

  import { SearchSection, OverviewSection, WeatherForecastSection } from '@/sections';
  import { OverviewCard, WindCard } from '@/components';
  import dayjs from 'dayjs';
  import { SunriseIcon, SunsetIcon } from '@/assets/icons';

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
  const dailyData = computed(() => weatherData.value?.daily);

  const sunData = computed(() => [
    { icon: SunsetIcon, title: 'Sunset', value: dayjs(dailyData.value?.sunset?.[0]).format('HH:mm') || 'N/A' },
    { icon: SunriseIcon, title: 'Sunrise', value: dayjs(dailyData.value?.sunrise?.[0]).format('HH:mm') || 'N/A' },
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
