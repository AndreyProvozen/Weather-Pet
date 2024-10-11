<template>
  <div class="overview-section" :style="{ backgroundImage: `url(${imageUrl})` }">
    <OverviewTopContent
      :weather-description="weatherDescription"
      :temperature-min="temperatureMin"
      :temperature-max="temperatureMax"
      :temperature-now="temperatureNow"
    />
    <div class="overview-section__cards-wrapper">
      <OverviewCard v-for="card in weatherDetails" :key="card.title" v-bind="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from '@/store';
  import { getCurrentSeason, metersToKilometers } from '@/utils';
  import { SunriseIcon, SunsetIcon, HumidityIcon, EyeIcon } from '@/assets/icons';
  import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
  import { OverviewCard, OverviewTopContent } from '@/components';
  import dayjs from 'dayjs';

  const {
    state: { weather },
  } = useStore();
  const season = getCurrentSeason();

  const weatherData = computed(() => weather.weatherData);
  const dailyData = computed(() => weatherData.value?.daily);
  const currentData = computed(() => weatherData.value?.current);
  const hourlyData = computed(() => weatherData.value?.hourly);
  const unitsData = computed(() => weatherData.value?.units);

  const weatherDescription = computed(() => 'test description');
  const temperatureNow = computed(
    () => `${Math.round(currentData.value?.temperature_2m ?? 0)}${unitsData.value?.degree ?? ''}`
  );
  const temperatureMax = computed(
    () => `${Math.round(dailyData.value?.temperature_2m_max?.[0] ?? 0)}${unitsData.value?.temperature ?? ''}`
  );
  const temperatureMin = computed(
    () => `${Math.round(dailyData.value?.temperature_2m_min?.[0] ?? 0)}${unitsData.value?.temperature ?? ''}`
  );

  const weatherDetails = computed(() => [
    { icon: EyeIcon, title: 'Visibility', value: `${metersToKilometers(hourlyData.value?.visibility?.[0] ?? 0)}` },
    {
      icon: HumidityIcon,
      title: 'Humidity',
      value: `${currentData.value?.relative_humidity_2m ?? 0}${unitsData.value?.humidity ?? ''}`,
    },
    { icon: SunriseIcon, title: 'Sunrise', value: dayjs(dailyData.value?.sunrise?.[0]).format('HH:mm') || 'N/A' },
    { icon: SunriseIcon, title: 'Clouds', value: '89%' },
    { icon: SunsetIcon, title: 'Sunset', value: dayjs(dailyData.value?.sunset?.[0]).format('HH:mm') || 'N/A' },
  ]);

  const imageUrl = (() => CITY_PAGE_VIEW_SEASON_IMAGE[season])();
</script>

<style lang="scss" scoped>
  .overview-section {
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    justify-content: space-between;
    padding: 60px 20px;
    position: relative;

    &::before {
      background-color: rgba($color: $black, $alpha: 60%);
      border-radius: 10px;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &__cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
      margin-top: 40px;
      z-index: 1;
    }

    @media (max-width: $breakpoint-lg) {
      height: auto;
    }
  }
</style>
