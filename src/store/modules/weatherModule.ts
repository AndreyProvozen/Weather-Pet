import type { Module } from 'vuex';
import type { State } from '..';
import type { CoordinatesProps, HourlyWeatherProps, OneCallWeatherData } from '@/interface';
import dayjs from 'dayjs';
import { getFullWeatherData } from '@/api';

export interface WeatherModuleState {
  weatherData: OneCallWeatherData | null;
}

export const weatherModule: Module<WeatherModuleState, State> = {
  state: () => ({ weatherData: null }),
  mutations: {
    setFullWeatherData(state, data: OneCallWeatherData) {
      state.weatherData = data;
    },
  },
  actions: {
    async fetchFullWeatherData({ commit }, { lat, lon }: CoordinatesProps) {
      const weatherResponse = await getFullWeatherData({ lat, lon });

      const currentTimeUTC = dayjs.unix(weatherResponse.current?.dt).utc();
      weatherResponse.currentTime = currentTimeUTC.add(weatherResponse.timezone_offset, 'second');

      weatherResponse.hourly.forEach((hour: HourlyWeatherProps) => {
        const hourUTC = dayjs.unix(hour.dt).utc();
        hour.currentTime = hourUTC.add(weatherResponse.timezone_offset, 'second');
      });

      commit('setFullWeatherData', weatherResponse);
    },
  },
};
