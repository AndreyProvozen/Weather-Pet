<template>
  <div class="weather-forecast-section">
    <ForecastCard
      variant="hourly"
      title="HOURLY FORECAST"
      icon="clock"
      :temperature-list="hourlyData?.temperature_2m || []"
      :times-list="hourlyData?.time || []"
    />
    <ForecastCard
      variant="daily"
      title="10-DAY FORECAST"
      icon="calendar"
      :temperature-list="dailyData?.temperature_2m_max || []"
      :times-list="dailyData?.time || []"
    />
    <UVIndexCard :uv-index="dailyData?.uv_index_max[0] || 0" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { ForecastCard, UVIndexCard } from '@/components';
  import { useWeatherStore } from '@/stores/weather';

  const { weatherData } = useWeatherStore();

  const dailyData = computed(() => weatherData?.daily);
  const hourlyData = computed(() => weatherData?.hourly);
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
