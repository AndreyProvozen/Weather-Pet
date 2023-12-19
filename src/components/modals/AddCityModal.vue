<template>
  <img class="modal-image" alt="Add new city modal image" :src="getImageUrl()" />
  <h4 class="modal-title">Add new city</h4>
  <Input
    type="text"
    placeholder="Search for a city or state"
    variant="outlined"
    :value="searchCitiesQuery"
    @on-change="onInputValueChange"
  />
  <ul v-if="searchCitiesList" class="autocomplete-input">
    <p v-if="searchCitiesError" class="m-0">Something went wrong, please try again later</p>
    <p v-if="searchCitiesList.length === 0" class="m-0">No results found</p>
    <template v-else>
      <li
        v-for="cityData in searchCitiesList"
        :key="cityData.id"
        style="padding: 8px 0; cursor: pointer"
        @click="redirectToCityView(cityData)"
      >
        {{ cityData.place_name }}
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { CityData } from '@/interface';
import getCurrentSeason from '@/utils/getCurrentSeason';
import Input from '@/atoms/Input.vue';
import { MODAL_SEASON_IMAGE } from '@/constants';

interface Props {
  searchCitiesList?: CityData[];
  searchCitiesError: boolean;
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
</style>
