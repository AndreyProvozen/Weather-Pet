<template>
  <div style="display: flex; flex-direction: column; gap: 20px; width: 50%">
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <ClockIcon />
        <h4 class="m-0">HOURLY FORECAST</h4>
      </div>
      <div class="content-list-wrapper">
        <div v-for="(time, index) in hourlyData?.time" :key="`time-${time}`" class="content-list-item">
          <p class="m-0">
            {{ index === 0 ? 'Now' : dayjs(time).format('HH:mm') }}
          </p>
          <p class="temperature">
            {{ `${Math.round(hourlyData.temperature_2m[index])}&deg;` }}
          </p>
          <img style="height: 50px; width: 50px" :src="`/src/assets/weatherIcon/colorful/04d.png`" />
        </div>
      </div>
    </div>
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <CalendarIcon />
        <h4 class="m-0">7-DAY FORECAST</h4>
      </div>
      <div class="content-list-wrapper">
        <div v-for="(day, index) in dailyData?.time" :key="`day-${day}`" class="content-list-item">
          <p class="m-0">
            {{ index === 0 ? 'Today' : dayjs(day).format('ddd') }}
          </p>
          <p style="margin: 10px 0">
            {{ dayjs(day).format('DD/MM') }}
          </p>
          <p class="temperature">
            {{ `${Math.round(dailyData.temperature_2m_max[index])}&deg;` }}
          </p>
          <img style="height: 50px; width: 50px" :src="`/src/assets/weatherIcon/colorful/02d.png`" />
        </div>
      </div>
    </div>
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <UVIndexIcon />
        <h4 class="m-0">UV INDEX</h4>
      </div>
      <div style="margin-top: 5px">
        <p class="m-0" style="font-size: 30px">{{ dailyData?.uv_index_max[0].toFixed(1) }}</p>
        <h4 style="font-weight: 400; margin: 5px 0 10px">{{ uvIndexData.label }}</h4>
        <div class="block" />
        <p class="subtitle">{{ uvIndexData.recommendations }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ClockIcon, CalendarIcon, UVIndexIcon } from '@/assets/icons';
import { getUVIndexCategory } from '@/utils';
import { useStore } from '@/store';
import { computed } from 'vue';

const { state } = useStore();

const weatherData = computed(() => state.weather.weatherData);
const dailyData = computed(() => weatherData.value?.daily);
const hourlyData = computed(() => weatherData.value?.hourly);

const uvIndexData = getUVIndexCategory(dailyData.value?.uv_index_max[0] || 0);
</script>

<style scoped lang="scss">
.content-list-wrapper {
  align-items: center;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}

.block {
  background: linear-gradient(to right, #3ea72d 0%, #fff300 33%, #f18b00 50%, #e53210 67%, #b567a4 100%);
  border-radius: 30px;
  height: 8px;
}

.content-list-item {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.temperature {
  font-size: 30px;
  margin: 10px 0;
}

.hourly-forecast {
  background: rgba($color: $dark-blue, $alpha: 40%);
  border-radius: 10px;
  padding: 16px;
}

.title-wrapper {
  align-items: center;
  border-bottom: 2px solid;
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
</style>
