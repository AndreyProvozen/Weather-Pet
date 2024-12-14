<template>
  <ForecastCardWrapper :icon="titleIcon" :title="title">
    <div class="forecast-card-content">
      <div v-for="(time, index) in timesList" :key="`${variant}-${time}`" class="forecast-card-content__item">
        <p class="m-0">
          {{ index === 0 ? firsElementValue : dayjs(time).format(topDateFormat) }}
        </p>
        <p v-if="isDaily" style="margin: 10px 0">
          {{ dayjs(time).format('DD/MM') }}
        </p>
        <p class="forecast-card-content__temperature">
          {{ `${Math.round(temperatureList[index] as number)}&deg;` }}
        </p>
        <NuxtImg
          width="50px"
          height="50px"
          alt="Forecast icon"
          :src="`/weather-icon/colorful/${getWeatherIconName({ code: weatherCodes[index], isDay: isDaily || false })}.svg`"
        />
      </div>
    </div>
  </ForecastCardWrapper>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
  import ForecastCardWrapper from './ForecastCardWrapper.vue';

  interface Props {
    titleIcon: string;
    title: string;
    timesList: string[];
    weatherCodes: number[];
    temperatureList: number[];
    variant: 'hourly' | 'daily';
  }

  const { variant } = defineProps<Props>();

  const isDaily = computed(() => variant === 'daily');
  const firsElementValue = computed(() => (isDaily.value ? 'Today' : 'Now'));
  const topDateFormat = computed(() => (isDaily.value ? 'ddd' : 'HH:mm'));
</script>

<style lang="scss">
  .forecast-card-content {
    align-items: center;
    display: flex;
    gap: 10px;
    overflow-x: auto;

    &__item {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    &__temperature {
      font-size: 30px;
      margin: 10px 0;
    }

    &__image {
      height: 50px;
      width: 50px;
    }
  }
</style>
