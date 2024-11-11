import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchCitiesAutoComplete } from '@/api';
import type { CityData } from '@/interface';

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref('');
  const searchCitiesList = ref<CityData[]>([]);

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };

  const citiesAutoComplete = async () => {
    const { features } = await fetchCitiesAutoComplete(searchQuery.value);
    searchCitiesList.value = features;
  };

  return { searchQuery, searchCitiesList, setSearchQuery, citiesAutoComplete };
});
