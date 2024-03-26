<script setup lang="ts">
import { Ref, ref } from 'vue';
import CityCard from '@/components/HomeViewComponents/CityCard.vue';
import type { CityData, CityListDataWithWeather } from '@/interface';
import { get, set, useDebounceFn, useToggle } from '@vueuse/core';
import { fetchCitiesAutoComplete } from '@/api';
import Button from '@/atoms/Button.vue';
import ModalWrapper from '@/atoms/ModalWrapper.vue';
import AddCityModal from '@/components/modals/AddCityModal.vue';
import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
import getCurrentSeason from '@/utils/getCurrentSeason';
import Input from '@/atoms/Input.vue';

interface Props {
  savedCitiesList: CityListDataWithWeather[];
}

defineProps<Props>();

const [isAddCityModalOpen, setIsAddCityModalOpen] = useToggle(false);
const searchQuery = ref('');
const searchCitiesList: Ref<CityData[] | undefined> = ref();

const searchCitiesAutoComplete = useDebounceFn(async () => {
  const { features } = await fetchCitiesAutoComplete(get(searchQuery));

  set(searchCitiesList, features);
}, 500);

const onInputValueChange = async (value: string) => {
  set(searchQuery, value);

  if (get(searchQuery).length > 2) return await searchCitiesAutoComplete();

  set(searchCitiesList, undefined);
};
const season = getCurrentSeason();
const getImageUrl = (() => CITY_PAGE_VIEW_SEASON_IMAGE[season])();
</script>

<template>
  <div
    class="black-image-overlay"
    :style="{
      backgroundImage: `url(${getImageUrl})`,
    }"
  >
    <div style="margin: 30px 50px 0; max-width: 700px; width: 100%; z-index: 1">
      <h1 style="margin: 20px auto; max-width: 645px; text-shadow: #000 1px 0 10px">
        Discover the Latest Weather Forecast Updates
      </h1>
      <div
        style="
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 1px 5px 0 #000;
          display: flex;
          gap: 10px;
          padding: 15px;
        "
      >
        <Input style="flex: 1" placeholder="Enter the location you're searching for" value="" />
        <Button variant="filled"> Search </Button>
        <Button variant="outlined"> Favorites </Button>
      </div>
    </div>
  </div>
  <div class="container">
    <h3 style="color: #000; text-align: center">Saved Cities</h3>
    <Button variant="filled" @click="setIsAddCityModalOpen(true)"> Open add City modal </Button>
    <div class="city-card-container">
      <div v-for="city in savedCitiesList" :key="city.id">
        <CityCard :city-data="city" />
      </div>
    </div>
  </div>
  <ModalWrapper :is-modal-open="isAddCityModalOpen" @close-modal="setIsAddCityModalOpen(false)">
    <AddCityModal
      :search-cities-list="searchCitiesList"
      :search-cities-query="searchQuery"
      :on-input-value-change="onInputValueChange"
    />
  </ModalWrapper>
</template>

<style scoped lang="scss">
.city-card-container {
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: space-evenly;
}

.black-image-overlay {
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
  display: flex;
  flex-direction: column;
  height: calc(60vh);
  position: relative;
  text-align: center;

  &::before {
    background-color: rgba($color: $dark-blue, $alpha: 40%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
