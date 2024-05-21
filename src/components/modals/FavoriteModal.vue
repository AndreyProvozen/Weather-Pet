<template>
  <ModalWrapper :is-modal-open="modal.isFavoriteModalOpen" @close-modal="commit('setIsFavoriteModalOpen', false)">
    <img class="modal-image" alt="Add new city modal image" :src="MODAL_SEASON_IMAGE[season]" />
    <h4 class="modal-title">Add new city</h4>
    <Input
      type="text"
      placeholder="Search for a city or state"
      :value="search.searchQuery"
      required
      @on-change="onInputValueChange"
    />
    <ul v-if="search.searchCitiesList" class="autocomplete-input">
      <p v-if="search.searchCitiesList.length === 0" class="m-0">No results found</p>
      <template v-else>
        <li
          v-for="cityData in search.searchCitiesList"
          :key="cityData.id"
          style="cursor: pointer; padding: 8px 0"
          @click="redirectToCityView(cityData)"
        >
          {{ cityData.place_name }}
        </li>
      </template>
    </ul>
  </ModalWrapper>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { CityData } from '@/interface';
import { getCurrentSeason } from '@/utils';
import { Input, ModalWrapper } from '@/atoms';
import { MODAL_SEASON_IMAGE } from '@/constants';
import { useStore } from '@/store';
import { useDebounceFn } from '@vueuse/core';
import { watch } from 'vue';

const router = useRouter();
const { commit, dispatch, state } = useStore();
const season = getCurrentSeason();

const { modal, search } = state;

const redirectToCityView = (cityData: CityData) => {
  const [city, queryState] = cityData.place_name.split(',');

  router.push({
    name: 'cityView',
    params: { city, state: queryState.replaceAll(' ', '') },
    query: {
      lon: cityData.geometry.coordinates[0],
      lat: cityData.geometry.coordinates[1],
    },
  });
};

const searchCitiesAutoComplete = useDebounceFn(async () => await dispatch('citiesAutoComplete'), 500);

const onInputValueChange = (value: string) => commit('setSearchQuery', value);

watch(
  () => search.searchQuery,
  async (newQuery: string) => {
    if (newQuery.length > 2) return await searchCitiesAutoComplete();

    commit('setSearchCitiesList', undefined);
  }
);
</script>

<style lang="scss" scoped>
.modal {
  &-image {
    border-radius: 8px;
    height: 250px;
    width: 100%;
  }

  &-title {
    color: $black;
    margin: 16px 0;
  }

  &-text-input {
    width: 100%;
  }
}

.autocomplete-input {
  border: 2px solid $gray;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba($color: $black, $alpha: 10%);
  color: black;
  list-style-type: none;
  margin: 8px 0 0;
  padding: 8px 16px;
  width: 100%;
}
</style>
