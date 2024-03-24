<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { CityData } from '@/interface';
import getCurrentSeason from '@/utils/getCurrentSeason';
import Input from '@/atoms/Input.vue';
import { MODAL_SEASON_IMAGE } from '@/constants';

interface Props {
  searchCitiesList?: CityData[];
  searchCitiesQuery: string;
  onInputValueChange: (value: string) => void;
}

defineEmits(['inputChange']);
defineProps<Props>();

const router = useRouter();
const season = getCurrentSeason();

const getImageUrl = () => MODAL_SEASON_IMAGE[season];

const redirectToCityView = (cityData: CityData) => {
  const [city, state] = cityData.place_name.split(',');

  router.push({
    name: 'cityView',
    params: { city, state: state.replaceAll(' ', '') },
    query: {
      lon: cityData.geometry.coordinates[0],
      lat: cityData.geometry.coordinates[1],
    },
  });
};
</script>

<template>
  <img class="modal-image" alt="Add new city modal image" :src="getImageUrl()" />
  <h4 class="modal-title">Add new city</h4>
  <Input
    type="text"
    placeholder="Search for a city or state"
    :value="searchCitiesQuery"
    required
    @on-change="onInputValueChange"
  />
  <ul v-if="searchCitiesList" class="autocomplete-input">
    <p v-if="searchCitiesList.length === 0" class="m-0">No results found</p>
    <template v-else>
      <li
        v-for="cityData in searchCitiesList"
        :key="cityData.id"
        style="cursor: pointer; padding: 8px 0"
        @click="redirectToCityView(cityData)"
      >
        {{ cityData.place_name }}
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.modal {
  &-image {
    border-radius: 8px;
    height: 250px;
    width: 100%;
  }

  &-title {
    color: $deep-blue;
    margin: 16px 0;
  }

  &-text-input {
    width: 100%;
  }
}

.autocomplete-input {
  border: 2px solid $pale-gray;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba($color: #000, $alpha: 10%);
  color: black;
  list-style-type: none;
  margin: 8px 0 0;
  padding: 8px 16px;
  width: 100%;
}
</style>
