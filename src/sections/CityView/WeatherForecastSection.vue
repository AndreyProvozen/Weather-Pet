<template>
  <div class="weather-forecast-section">
    <ForecastCard
      variant="hourly"
      title="HOURLY FORECAST"
      icon="clock"
      :temperature-list="weatherData?.hourly?.temperature_2m || []"
      :times-list="weatherData?.hourly?.time || []"
    />
    <ForecastCard
      variant="daily"
      title="10-DAY FORECAST"
      icon="calendar"
      :temperature-list="weatherData?.daily?.temperature_2m_max || []"
      :times-list="weatherData?.daily?.time || []"
    />
    <UVIndexCard :uv-index="weatherData?.daily?.uv_index_max[0] || 0" />
  </div>
</template>

<script setup lang="ts">
  import { ForecastCard, UVIndexCard } from '@/components';
  import { useWeatherStore } from '@/stores/weather';

  const { weatherData } = useWeatherStore();
</script>

<style scoped lang="scss">
  .weather-forecast-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;

    @media (max-width: $breakpoint-lg) {
      width: auto;
    }
  }
</style>
