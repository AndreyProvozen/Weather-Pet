<template>
  <div class="left-weather-content" :style="{ backgroundImage: `url(${getImageUrl})` }">
    <div class="left-weather-content__top-section">
      <p class="left-weather-content__top-section__temperature">{{ temperatureNow }}</p>
      <p class="left-weather-content__top-section__description capitalize-first-letter">
        {{ weatherDescription }}
      </p>
      <p class="m-0 capitalize-first-letter" style="text-wrap: balance">
        The forecast for today anticipates
        {{ weatherDescription }}, with temperatures expected to vary between a low of {{ temperatureMin }} and a high of
        {{ temperatureMax }}.
      </p>
    </div>
    <div class="left-weather-content__cards-section">
      <div v-for="card in weatherDetails" :key="card.title" class="left-weather-content__cards-section__card">
        <component :is="card.icon" />
        <div style="margin-inline: auto">
          <h5 class="m-0">{{ card.title }}</h5>
          <p class="m-0 value">
            {{ card.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentSeason, metersToKilometers } from '@/utils';
import { SunriseIcon, SunsetIcon, HumidityIcon, EyeIcon } from '@/assets/icons';
import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
import dayjs from 'dayjs';
import { useStore } from '@/store';
import { computed } from 'vue';

const {
  state: { weather },
} = useStore();
const season = getCurrentSeason();

const weatherData = computed(() => weather.weatherData);

const dailyData = computed(() => weatherData.value?.daily);
const unitsData = computed(() => weatherData.value?.units);
const currentData = computed(() => weatherData.value?.current);
const hourlyData = computed(() => weatherData.value?.hourly);

const weatherDescription = computed(() => 'test description');
const temperatureNow = computed(() => `${Math.round(currentData.value.temperature_2m)}${unitsData.value.degree}`);
const temperatureMax = computed(
  () => `${Math.round(dailyData.value.temperature_2m_max[0])}${unitsData.value.temperature}`
);
const temperatureMin = computed(
  () => `${Math.round(dailyData.value.temperature_2m_min[0])}${unitsData.value.temperature}`
);

const weatherDetails = [
  { icon: EyeIcon, title: 'Visibility', value: `${metersToKilometers(hourlyData.value.visibility[0])}` },
  {
    icon: HumidityIcon,
    title: 'Humidity',
    value: `${currentData.value.relative_humidity_2m}${unitsData.value.humidity}`,
  },
  { icon: SunriseIcon, title: 'Sunrise', value: dayjs(dailyData.value.sunrise[0]).format('HH:mm') },
  { icon: SunsetIcon, title: 'Sunset', value: dayjs(dailyData.value.sunset[0]).format('HH:mm') },
];

const getImageUrl = (() => CITY_PAGE_VIEW_SEASON_IMAGE[season])();
</script>

<style lang="scss" scoped>
.left-weather-content {
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

  &__top-section {
    max-width: 600px;
    margin-inline: auto;
    text-align: center;
    z-index: 1;

    &__temperature {
      font-size: 100px;
      margin: 0;
      line-height: 120px;
    }

    &__description {
      font-size: 30px;
      line-height: 40px;
      margin: 0;
    }
  }

  &__cards-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    z-index: 1;

    &__card {
      align-items: center;
      background: rgba($color: $dark-blue, $alpha: 80%);
      border-radius: 10px;
      display: flex;
      flex: 1;
      gap: 10px;
      padding: 15px;
      text-align: center;

      .value {
        font-size: 28px;
        margin-left: auto;
        margin-top: 5px;
      }
    }
  }
}
</style>
