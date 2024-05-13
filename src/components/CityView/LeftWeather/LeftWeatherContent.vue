<template>
  <div class="image-overlay" :style="{ backgroundImage: `url(${getImageUrl})` }">
    <div style="text-align: center; z-index: 1">
      <p class="m-0" style="font-size: 90px; line-height: 120px">{{ Math.round(currentTemperature) }}&deg;</p>
      <p class="m-0 capitalize-first-letter" style="font-size: 30px; line-height: 40px">
        {{ weatherToday.weather[0].description }}
      </p>
      <p class="m-0 capitalize-first-letter" style="text-wrap: balance">
        The forecast for today anticipates
        {{ weatherToday.weather[0].description }}, with temperatures expected to vary between a low of
        {{ Math.round(weatherToday.temp.min) }}&deg;C and a high of {{ Math.round(weatherToday.temp.max) }}&deg;C.
      </p>
    </div>
    <div class="card-wrapper">
      <div v-for="card in weatherDetails" :key="card.title" class="card">
        <component :is="card.icon" />
        <div class="mx-auto">
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
import { LeftWeatherProps } from '.';
import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
import dayjs from 'dayjs';

const season = getCurrentSeason();
const { currentVisibility, weatherToday } = defineProps<LeftWeatherProps>();

const weatherDetails = [
  {
    icon: EyeIcon,
    title: 'Visibility',
    value: metersToKilometers(currentVisibility),
  },
  {
    icon: HumidityIcon,
    title: 'Humidity',
    value: `${weatherToday.humidity}%`,
  },
  {
    icon: SunriseIcon,
    title: 'Sunrise',
    value: dayjs.unix(weatherToday.sunrise).format('HH:mm'),
  },
  {
    icon: SunsetIcon,
    title: 'Sunset',
    value: dayjs.unix(weatherToday.sunset).format('HH:mm'),
  },
];

const getImageUrl = (() => CITY_PAGE_VIEW_SEASON_IMAGE[season])();
</script>

<style lang="scss" scoped>
.season-image {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba($color: $black, $alpha: 20%);
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  z-index: 1;
}

.card {
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

.image-overlay {
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
}
</style>
