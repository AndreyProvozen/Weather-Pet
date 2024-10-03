import type { Module } from 'vuex';
import type { State } from '..';
import type { CoordinatesProps } from '@/interface';

import { getFullWeatherData } from '@/api';
import fetchFullWeatherDataDTO from '@/utils/fetchFullWeatherDataDTO';

type WeatherDataProps = ReturnType<typeof fetchFullWeatherDataDTO>;

export interface WeatherModuleState {
  weatherData: WeatherDataProps | null;
}

export const weatherModule: Module<WeatherModuleState, State> = {
  state: () => ({ weatherData: null }),
  mutations: {
    setFullWeatherData(state, data: WeatherDataProps) {
      state.weatherData = data;
    },
  },
  actions: {
    async fetchFullWeatherData({ commit }, { lat, lon }: CoordinatesProps) {
      const weatherResponse = await getFullWeatherData({ lat, lon });
      const formattedWeather = fetchFullWeatherDataDTO(weatherResponse);

      commit('setFullWeatherData', formattedWeather);
    },
  },
};
