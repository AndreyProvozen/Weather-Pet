import { defineStore } from 'pinia';
import { getFullWeatherData } from '@/api';
import fetchFullWeatherDataDTO from '@/utils/fetchFullWeatherDataDTO';
import type { CoordinatesProps } from '@/interface';

export const useWeatherStore = defineStore('weather', () => {
  const weatherData = ref<ReturnType<typeof fetchFullWeatherDataDTO> | null>(null);

  const fetchFullWeatherData = async ({ lat, lon }: CoordinatesProps) => {
    const weatherResponse = await getFullWeatherData({ lat, lon });
    weatherData.value = fetchFullWeatherDataDTO(weatherResponse);
  };

  return { weatherData, fetchFullWeatherData };
});
