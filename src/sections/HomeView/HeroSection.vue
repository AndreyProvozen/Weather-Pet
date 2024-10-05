<template>
  <section class="black-image-overlay" :style="{ backgroundImage: `url(${CITY_PAGE_VIEW_SEASON_IMAGE[season]})` }">
    <div class="hero-block">
      <h1 class="hero-block__title">Discover the Latest Weather Forecast Updates</h1>
      <div class="hero-block__search-wrapper">
        <Input
          style="flex: 1"
          :end-input-icon="SearchIcon"
          placeholder="Enter the location you're searching for"
          :value="searchValue"
          @on-change="onSearchValueChange"
        />
        <div class="hero-block__buttons-container">
          <Button variant="filled"> Search </Button>
          <Button variant="outlined"> Saved </Button>
        </div>
      </div>
      <ul v-if="searchCitiesList" class="hero-block__autocomplete-wrapper">
        <div v-if="searchCitiesList.length === 0" style="margin: 40px auto; max-width: 400px">
          <b style="font-size: 24px">We’re sorry we couldn’t find a place with that name 🤷</b>
          <p class="mb-0">Please double check the spelling and try again</p>
        </div>
        <li
          v-for="{ id, place_name, geometry } in searchCitiesList"
          v-else
          :key="id"
          class="hero-block__autocomplete-item"
          @click="redirectToCityView(place_name, geometry)"
        >
          {{ place_name }}
        </li>
      </ul>
      <ScrollBottomIcon />
    </div>
  </section>
</template>

<script setup lang="ts">
import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
import { getCurrentSeason } from '@/utils';
import { Button, Input } from '@/atoms';
import { SearchIcon } from '@/assets/icons';
import { type Ref, ref, watch, onMounted } from 'vue';
import { get, set, useDebounceFn } from '@vueuse/core';
import type { CityData } from '@/interface';
import { fetchCitiesAutoComplete } from '@/api';
import { useRouter } from 'vue-router';
import { ScrollBottomIcon } from '@/components';

const router = useRouter();

const searchValue = ref('');
const searchCitiesList: Ref<CityData[] | undefined> = ref();

const season = getCurrentSeason();

const searchCitiesAutoComplete = useDebounceFn(async () => {
  const { features } = await fetchCitiesAutoComplete(get(searchValue));

  set(searchCitiesList, features);
}, 500);

const onSearchValueChange = (value: string) => set(searchValue, value);

watch(searchValue, async () => {
  if (get(searchValue).length > 2) return await searchCitiesAutoComplete();

  set(searchCitiesList, undefined);
});

const redirectToCityView = (place_name: string, geometry: CityData['geometry']) => {
  const [city, state] = place_name.split(',');

  router.push({
    name: 'cityView',
    params: { city, state: state.replaceAll(' ', '') },
    query: { lon: geometry.coordinates[0], lat: geometry.coordinates[1] },
  });
};

onMounted(() => {
  const link = document.createElement('link');

  link.rel = 'preload';
  link.as = 'image';
  link.href = CITY_PAGE_VIEW_SEASON_IMAGE[season];

  document.head.appendChild(link);
});
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
  height: 100%;
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

  &__title {
    margin: 20px;
    text-shadow: $black 1px 0 10px;
    text-wrap: balance;

    @media (max-width: $breakpoint-xs) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  &__search-wrapper {
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

  &__buttons-container {
    display: flex;
    gap: 8px;

    @media (max-width: $breakpoint-sm) {
      & > button {
        flex: 1;
        justify-content: center;
      }
    }
  }

  &__autocomplete-wrapper {
    background: $white;
    border-radius: 8px;
    box-shadow: 0 1px 5px 0 $black;
    color: $black;
    list-style-type: none;
    margin: 8px 0 0;
    padding: 16px;
  }

  &__autocomplete-item {
    border-radius: 4px;
    cursor: pointer;
    padding: 8px 0;

    &:hover {
      background: rgba($color: $purple, $alpha: 30%);
    }
  }

  @media (max-width: $breakpoint-md) {
    margin-left: $SIDE_SPACING;
    margin-right: $SIDE_SPACING;
  }

  @media (max-width: $breakpoint-xs) {
    margin-top: 0;
  }
}
</style>
