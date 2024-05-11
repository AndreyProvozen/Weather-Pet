import { getShortWeatherData } from '@/api';
import { CityListDataWithWeather } from '@/interface';
import { Module } from 'vuex';
import { State } from '..';

export interface GlobalModuleState {
  firstTimeVisit: boolean;
  savedCitiesList: CityListDataWithWeather[];
}

export const globalModule: Module<GlobalModuleState, State> = {
  state: () => ({ firstTimeVisit: true, savedCitiesList: [] }),
  getters: { isFirstTimeVisit: ({ firstTimeVisit }) => firstTimeVisit },
  mutations: {
    setFirstTimeVisit: (state, isFirstTimeVisit: boolean) => {
      state.firstTimeVisit = isFirstTimeVisit;
    },
    setSavedCitiesList: (state, citiesList: CityListDataWithWeather[]) => {
      state.savedCitiesList = citiesList;
    },
    setWeatherData: (state, { index, weather }: { index: number; weather: any }) => {
      state.savedCitiesList[index].weather = weather;
    },
  },
  actions: {
    async loadSavedCities({ commit, state }) {
      const citiesList = localStorage.getItem('saved_cities_list') || '[]';
      commit('setSavedCitiesList', JSON.parse(citiesList));

      const weatherRequests = state.savedCitiesList.map(({ coordinates }) => getShortWeatherData(coordinates));
      const weatherData = await Promise.all(weatherRequests);

      weatherData.forEach((weather, index) => commit('setWeatherData', { index, weather }));
    },
    checkFirstTimeVisit({ commit }) {
      const isFirstTimeVisitValue = JSON.parse(localStorage.getItem('first_time_visit') || 'true');
      commit('setFirstTimeVisit', isFirstTimeVisitValue);
    },
  },
};
