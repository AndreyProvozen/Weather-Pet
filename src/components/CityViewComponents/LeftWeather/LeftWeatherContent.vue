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
      <div class="card-wrapper">
        <div class="card" v-for="card in weatherDetails" :key="card.title">
          <component :is="card.icon" />
          <div class="mx-auto">
            <h5 class="m-0">{{ card.title }}</h5>
            <p class="m-0 value">
              {{ card.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getCurrentSeason from "@/utils/getCurrentSeason";
import SunriseIcon from "@/assets/icons/sunrise.svg";
import SunsetIcon from "@/assets/icons/sunset.svg";
import HumidityIcon from "@/assets/icons/humidity.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import metersToKilometers from "@/utils/metersToKilometers";
import { LeftWeatherProps } from ".";
import { CITY_PAGE_VIEW_SEASON_IMAGE } from "@/constants";
import dayjs from "dayjs";

const props = defineProps<LeftWeatherProps>();

const weatherDetails = [
  {
    icon: EyeIcon,
    title: "Visibility",
    value: metersToKilometers(props.currentVisibility),
  },
  {
    icon: HumidityIcon,
    title: "Humidity",
    value: `${props.weatherToday.humidity}%`,
  },
  {
    icon: SunriseIcon,
    title: "Sunrise",
    value: dayjs.unix(props.weatherToday.sunrise).format("HH:mm"),
  },
  {
    icon: SunsetIcon,
    title: "Sunset",
    value: dayjs.unix(props.weatherToday.sunset).format("HH:mm"),
  },
];

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

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.card {
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex: 1;
  align-items: center;
  text-align: center;
  background: rgba($color: $deep-blue, $alpha: 0.8);

  .value {
    font-size: 28px;
    margin-top: 5px;
    margin-left: auto;
  }
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
