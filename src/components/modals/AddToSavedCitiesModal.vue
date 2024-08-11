<template>
  <ModalWrapper
    :is-modal-open="modal.isAddToSavedCitiesModalOpen"
    @close-modal="commit('setIsAddToSavedCitiesModalOpen', false)"
  >
    <img class="modal__image" alt="Add new city modal image" :src="MODAL_SEASON_IMAGE[season]" />
    <h4 class="modal__title">Add new city</h4>
    <Input
      type="text"
      placeholder="Search for a city or state"
      :value="modal.searchQuery"
      required
      @on-change="onInputValueChange"
    />
    <ul v-if="modal.searchCitiesList" class="modal__autocomplete">
      <AutocompleteContent
        :list="modal.searchCitiesList"
        @click="(cityData: CityData) => redirectToCityView(cityData)"
      />
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
import AutocompleteContent from '../AutocompleteContent.vue';

const router = useRouter();
const {
  commit,
  dispatch,
  state: { modal },
} = useStore();
const season = getCurrentSeason();

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
  () => modal.searchQuery,
  async (newQuery: string) => {
    if (newQuery.length > 2) return await searchCitiesAutoComplete();

    commit('setSearchCitiesList', undefined);
  }
);
</script>

<style lang="scss" scoped>
.modal {
  &__image {
    border-radius: 8px;
    height: 250px;
    width: 100%;
  }

  &__title {
    color: $black;
    margin: 16px 0;
  }
  &__autocomplete {
    border: 2px solid $gray;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba($color: $black, $alpha: 10%);
    color: black;
    list-style-type: none;
    margin: 8px 0 0;
    padding: 8px;
    width: 100%;
  }
}
</style>
