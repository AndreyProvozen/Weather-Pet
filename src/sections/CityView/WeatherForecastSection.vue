<template>
  <div class="weather-forecast-section">
    <ForecastCard
      variant="hourly"
      title="HOURLY FORECAST"
      :icon="ClockIcon"
      :temperature-list="hourlyData?.temperature_2m || []"
      :times-list="hourlyData?.time || []"
    />
    <ForecastCard
      variant="daily"
      title="7-DAY FORECAST"
      :icon="CalendarIcon"
      :temperature-list="dailyData?.temperature_2m_max || []"
      :times-list="dailyData?.time || []"
    />
    <UVIndexCard :uv-index="dailyData?.uv_index_max[0] || 0" />
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon, ClockIcon } from '@/assets/icons';
import { useStore } from '@/store';
import { computed } from 'vue';

import ForecastCard from '@/components/CityView/ForecastCard.vue';
import UVIndexCard from '@/components/CityView/UVIndexCard.vue';

const { state } = useStore();

const weatherData = computed(() => state.weather.weatherData);

const dailyData = computed(() => weatherData.value?.daily);
const hourlyData = computed(() => weatherData.value?.hourly);
</script>

<style scoped lang="scss">
.weather-forecast-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  @media (max-width: $breakpoint-lg) {
    width: auto;
    margin-bottom: 20px;
  }
}
</style>
