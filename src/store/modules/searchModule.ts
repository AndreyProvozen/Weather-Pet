import type { Module } from 'vuex';
import type { State } from '..';
import type { CityData } from '@/interface';
import { fetchCitiesAutoComplete } from '@/api';

export interface SearchModuleState {
  searchQuery: string;
  searchCitiesList: CityData[];
}

export const searchModule: Module<SearchModuleState, State> = {
  state: () => ({ searchQuery: '', searchCitiesList: [] }),
  mutations: {
    setSearchCitiesList(state, citiesList: CityData[]) {
      state.searchCitiesList = citiesList;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    async citiesAutoComplete({ state, commit }) {
      const { features } = await fetchCitiesAutoComplete(state.searchQuery);

      commit('setSearchCitiesList', features);
    },
  },
};
