<template>
  <ForecastCardWrapper :icon="icon" :title="title">
    <div class="forecast-card-content">
      <div v-for="(time, index) in timesList" :key="`${variant}-${time}`" class="forecast-card-content__item">
        <p class="m-0">
          {{ index === 0 ? firsElementValue : dayjs(time).format(topDateFormat) }}
        </p>
        <p v-if="isDaily" style="margin: 10px 0">
          {{ dayjs(time).format('DD/MM') }}
        </p>
        <p class="forecast-card-content__temperature">
          {{ `${Math.round(temperatureList[index])}&deg;` }}
        </p>
        <img class="forecast-card-content__image" :src="`/src/assets/weatherIcon/colorful/04d.png`" />
      </div>
    </div>
  </ForecastCardWrapper>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import ForecastCardWrapper from './ForecastCardWrapper.vue';
import { computed } from 'vue';

interface Props {
  timesList: string[];
  icon: any;
  title: string;
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
