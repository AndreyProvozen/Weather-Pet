<script setup lang="ts">
import type { CityListDataWithWeather } from '@/interface';
import dayjs from 'dayjs';

interface Props {
  cityData: CityListDataWithWeather;
}

const props = defineProps<Props>();

const isDayTime = props.cityData.weather?.weather[0].main.includes('d');
const cardBackgroundColor = isDayTime ? '#f2b107' : '#000066';

console.log(props.cityData.weather?.weather[0].main);
</script>

<template>
  <div
    :style="`display: flex;
      justify-content: space-between;
      padding: 20px;
      background: ${cardBackgroundColor};
      border-radius: 15px;`"
  >
    <div>
      <div style="align-items: center; color: white; display: flex; gap: 5px">
        <img :src="`/src/assets/weatherIcon/monochromatic/${cityData.weather?.weather[0].icon}.svg`" alt="" />
        {{ cityData.weather?.weather[0].main }}
      </div>
      <div style="font-size: 40px; line-height: 40px">{{ Math.round(cityData.weather?.main.temp) }}&deg;C</div>
    </div>
    <div style="text-align: end">
      <div>
        {{
          dayjs
            .unix(cityData.weather?.dt)
            .utcOffset(cityData.weather?.timezone / 60)
            .format('HH:mm')
        }}
      </div>
      <div>
        {{
          dayjs
            .unix(cityData.weather?.dt)
            .utcOffset(cityData.weather?.timezone / 60)
            .format('ddd MM.DD')
        }}
      </div>
      <div style="font-size: 18px">{{ cityData.city }}</div>
    </div>
  </div>
</template>
