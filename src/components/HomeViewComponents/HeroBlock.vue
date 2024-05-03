<template>
  <div class="black-image-overlay" :style="{ backgroundImage: `url(${getImageUrl})` }">
    <div class="hero-block">
      <h1 class="hero-block--title">Discover the Latest Weather Forecast Updates</h1>
      <div class="hero-block--search-wrapper">
        <Input
          style="flex: 1"
          :end-input-icon="SearchIcon"
          placeholder="Enter the location you're searching for"
          :value="searchValue"
          @on-change="onSearchValueChange"
        />
        <div class="hero-block--buttons-container">
          <Button variant="filled"> Search </Button>
          <Button variant="outlined"> Favorites </Button>
        </div>
      </div>
      <ul v-if="searchCitiesList" class="hero-block--autocomplete-wrapper">
        <p v-if="searchCitiesList.length === 0" class="m-0">No results found</p>
        <li v-for="{ id, place_name } in searchCitiesList" v-else :key="id" class="hero-block--autocomplete-item">
          {{ place_name }}
        </li>
      </ul>
      <div class="hero-block--scroll-icon-wrapper">
        <MouseIcon />
        <ArrowIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
import { getCurrentSeason } from '@/utils';
import { Button, Input } from '@/atoms';
import SearchIcon from '@/assets/icons/search.svg';
import MouseIcon from '@/assets/icons/mouse.svg';
import ArrowIcon from '@/assets/icons/arrow.svg';
import { type Ref, ref, watch } from 'vue';
import { get, set, useDebounceFn } from '@vueuse/core';
import type { CityData } from '@/interface';
import { fetchCitiesAutoComplete } from '@/api';

const searchValue: Ref<string> = ref('');
const searchCitiesList: Ref<CityData[] | undefined> = ref();

const searchCitiesAutoComplete = useDebounceFn(async () => {
  const { features } = await fetchCitiesAutoComplete(get(searchValue));

  set(searchCitiesList, features);
}, 500);

const onSearchValueChange = (value: string) => set(searchValue, value);

watch(searchValue, async () => {
  if (get(searchValue).length > 2) return await searchCitiesAutoComplete();

  set(searchCitiesList, undefined);
});

const season = getCurrentSeason();
const getImageUrl = (() => CITY_PAGE_VIEW_SEASON_IMAGE[season])();
</script>

<style scoped lang="scss">
.black-image-overlay {
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - $HEADER_HEIGHT);
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

.hero-block {
  margin-top: 30px;
  max-width: 700px;
  z-index: $z-10;

  @media (max-width: $breakpoint-md) {
    margin-left: $SIDE_SPACING;
    margin-right: $SIDE_SPACING;
  }

  @media (max-width: $breakpoint-xs) {
    margin-top: 0;
  }

  &--title {
    text-wrap: balance;
    margin: 20px 10px;
    text-shadow: $black 1px 0 10px;

    @media (max-width: $breakpoint-xs) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  &--search-wrapper {
    background: $white;
    border-radius: 8px;
    box-shadow: 0 1px 5px 0 $black;
    display: flex;
    gap: 8px;
    padding: 15px;

    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
    }
  }

  &--buttons-container {
    display: flex;
    gap: 8px;

    @media (max-width: $breakpoint-sm) {
      & > button {
        flex: 1;
        justify-content: center;
      }
    }
  }

  &--autocomplete-wrapper {
    border-radius: 8px;
    box-shadow: 0 1px 5px 0 $black;
    color: $black;
    background: $white;
    list-style-type: none;
    margin: 8px 0 0;
    padding: 8px 16px;
  }

  &--autocomplete-item {
    cursor: pointer;
    padding: 8px 0;
  }

  &--scroll-icon-wrapper {
    position: absolute;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
  }
}
</style>
