<template>
  <div class="image-wrapper">
    <img class="season-image" :src="getImageUrl()" alt="season background" />
    <div class="image-overlay">
      <div style="text-align: center">
        <p class="m-0" style="font-size: 90px; line-height: 120px">
          {{ Math.round(currentTemperature) }}&deg;
        </p>
        <p
          class="m-0 capitalize-first-letter"
          style="font-size: 30px; line-height: 40px"
        >
          {{ weatherToday.weather[0].description }}
        </p>
        <p class="m-0 capitalize-first-letter" style="text-wrap: balance">
          The forecast for today anticipates
          {{ weatherToday.weather[0].description }}, with temperatures expected
          to vary between a low of {{ Math.round(weatherToday.temp.min) }}&deg;C
          and a high of {{ Math.round(weatherToday.temp.max) }}&deg;C.
        </p>
      </div>
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        "
      >
        <div class="card">
          <EyeIcon />
          <div style="margin: 0 auto">
            <h5 class="m-0">VISIBILITY</h5>
            <p
              class="m-0"
              style="margin-left: auto; margin-top: 5px; font-size: 30px"
            >
              {{ metersToKilometers(currentVisibility) }}
            </p>
          </div>
        </div>

        <div class="card">
          <HumidityIcon />
          <div style="margin: 0 auto">
            <h5 class="m-0">HUMIDITY</h5>
            <p
              class="m-0"
              style="margin-left: auto; margin-top: 5px; font-size: 30px"
            >
              {{ weatherToday.humidity }}%
            </p>
          </div>
        </div>

        <div class="card">
          <SunriseIcon />
          <div style="margin: 0 auto">
            <h5 class="m-0">SUNRISE</h5>
            <p
              class="m-0"
              style="margin-left: auto; margin-top: 5px; font-size: 30px"
            >
              {{ dayjs.unix(weatherToday.sunrise).format("HH:mm") }}
            </p>
          </div>
        </div>

        <div class="card">
          <SunsetIcon />
          <div style="margin: 0 auto">
            <h5 class="m-0">SUNSET</h5>
            <p
              class="m-0"
              style="margin-left: auto; margin-top: 5px; font-size: 30px"
            >
              {{ dayjs.unix(weatherToday.sunset).format("HH:mm") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getCurrentSeason from "../../../utils/getCurrentSeason";
import SunriseIcon from "../../../assets/icons/sunrise.svg";
import SunsetIcon from "../../../assets/icons/sunset.svg";
import HumidityIcon from "../../../assets/icons/humidity.svg";
import EyeIcon from "../../../assets/icons/eye.svg";
import metersToKilometers from "../../../utils/metersToKilometers";
import { LeftWeatherProps } from ".";
import { CITY_PAGE_VIEW_SEASON_IMAGE } from "../../../constants";
import dayjs from "dayjs";

const props = defineProps<LeftWeatherProps>();
console.log(props.weatherToday);

const season = getCurrentSeason();

const getImageUrl = () => CITY_PAGE_VIEW_SEASON_IMAGE[season];
</script>

<style lang="scss" scoped>
.season-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.image-wrapper {
  position: relative;
  height: 80vh;
}

.card {
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex: 1;
  align-items: center;
  text-align: center;
  background: rgba($color: $deep-blue, $alpha: 0.8);
}

.image-overlay {
  position: absolute;
  box-sizing: border-box;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
</style>
