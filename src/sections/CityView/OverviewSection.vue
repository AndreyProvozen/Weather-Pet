<template>
  <div class="overview-section" :style="{ backgroundImage: `url(${CITY_PAGE_VIEW_SEASON_IMAGE[season]})` }">
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
  import { getCurrentSeason, metersToKilometers } from '@/utils';
  import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
  import { OverviewCard, OverviewTopContent } from '@/components';
  import { useWeatherStore } from '@/stores/weather';

  const { weatherData } = useWeatherStore();
  const season = getCurrentSeason();

  const weatherDescription = 'test description';

  const temperatureNow = computed(() => {
    const temperature = weatherData?.current?.temperature_2m ?? 0;
    const unit = weatherData?.units?.degree ?? '';

    return `${Math.round(temperature)}${unit}`;
  });

  const temperatureMax = computed(() => {
    const temperature = weatherData?.daily?.temperature_2m_max?.[0] ?? 0;
    const unit = weatherData?.units?.temperature ?? '';

    return `${Math.round(temperature)}${unit}`;
  });

  const temperatureMin = computed(() => {
    const temperature = weatherData?.daily?.temperature_2m_min?.[0] ?? 0;
    const unit = weatherData?.units?.temperature ?? '';

    return `${Math.round(temperature)}${unit}`;
  });

  const weatherDetails = computed(() => {
    const visibility = metersToKilometers(weatherData?.hourly?.visibility?.[0] ?? 0);
    const humidity = weatherData?.current?.relative_humidity_2m ?? 0;
    // TODO: implement logic for clouds
    const clouds = '89%';

    return [
      { icon: 'eye', title: 'Visibility', value: `${visibility}` },
      { icon: 'humidity', title: 'Humidity', value: `${humidity}${weatherData?.units?.humidity ?? ''}` },
      { icon: 'sunrise', title: 'Clouds', value: clouds },
    ];
  });
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
