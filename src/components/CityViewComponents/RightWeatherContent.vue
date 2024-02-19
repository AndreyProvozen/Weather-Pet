<template>
  <div style="display: flex; flex-direction: column; gap: 20px; width: 50%">
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <ClockIcon />
        <h4 class="m-0">HOURLY FORECAST</h4>
      </div>
      <div class="content-list-wrapper">
        <div
          v-for="(hourWeather, i) in weatherData.hourly.slice(0, 24)"
          :key="hourWeather.dt"
          class="content-list-item"
        >
          <p class="m-0">
            {{ i === 0 ? 'Now' : dayjs(hourWeather.currentTime).format('HH:mm') }}
          </p>
          <p class="temperature">
            {{ `${Math.round(hourWeather.temp)}&deg;` }}
          </p>
          <img
            style="width: 50px; height: 50px"
            :src="`/src/assets/weatherIcon/colorful/${hourWeather.weather[0].icon}.png`"
          />
        </div>
      </div>
    </div>
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <CalendarIcon />
        <h4 class="m-0">7-DAY FORECAST</h4>
      </div>
      <div class="content-list-wrapper">
        <div v-for="(dailyWeather, i) in weatherData.daily" :key="dailyWeather.dt" class="content-list-item">
          <p class="m-0">
            {{ i === 0 ? 'Today' : dayjs.unix(dailyWeather.dt).format('ddd') }}
          </p>
          <p style="margin: 10px 0">
            {{ dayjs.unix(dailyWeather.dt).format('DD/MM') }}
          </p>
          <p class="temperature">
            {{ `${Math.round(dailyWeather.temp.day)}&deg;` }}
          </p>
          <img
            style="width: 50px; height: 50px"
            :src="`/src/assets/weatherIcon/colorful/${dailyWeather.weather[0].icon}.png`"
          />
        </div>
      </div>
    </div>
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <UVIndexIcon />
        <h4 class="m-0">UV INDEX</h4>
      </div>
      <div style="margin-top: 5px">
        <p class="m-0" style="font-size: 30px">{{ weatherData.daily[0].uvi.toFixed(1) }}</p>
        <h4 style="margin: 5px 0 10px; font-weight: 400">{{ uvIndexData.label }}</h4>
        <div class="block" />
        <p class="subtitle">{{ uvIndexData.recommendations }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import ClockIcon from '@/assets/icons/clock.svg';
import getUVIndexCategory from '@/utils/getUVIndexCategory';
import CalendarIcon from '@/assets/icons/calendar.svg';
import UVIndexIcon from '@/assets/icons/uv-index.svg';

interface Props {
  weatherData: any;
}

const props = defineProps<Props>();
const uvIndexData = getUVIndexCategory(props.weatherData.current.uvi);
</script>

<style scoped lang="scss">
.content-list-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: scroll;
}

.block {
  border-radius: 30px;
  height: 8px;
  background: linear-gradient(to right, #3ea72d 0%, #fff300 33%, #f18b00 50%, #e53210 67%, #b567a4 100%);
}

.content-list-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.temperature {
  font-size: 30px;
  margin: 10px 0;
}

.hourly-forecast {
  background: rgba($color: $deep-blue, $alpha: 40%);
  padding: 16px;
  border-radius: 10px;
}

.title-wrapper {
  display: flex;
  gap: 5px;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid;
}
</style>
