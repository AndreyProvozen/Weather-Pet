<script setup lang="ts">
import { CITY_PAGE_VIEW_SEASON_IMAGE } from '@/constants';
import { getCurrentSeason } from '@/utils';
import Button from '@/atoms/Button.vue';
import Input from '@/atoms/Input.vue';

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
</template>

<style scoped lang="scss">
.black-image-overlay {
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
  display: flex;
  flex-direction: column;
  height: calc(55vh);
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
