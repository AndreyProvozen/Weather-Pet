import { Module } from 'vuex';
import { State } from '..';
import { fetchCitiesAutoComplete } from '@/api';
import { CityData } from '@/interface';

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
