<template>
  <div style="display: flex; flex-direction: column; gap: 20px; width: 50%">
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <ClockIcon />
        <h4 class="m-0">HOURLY FORECAST</h4>
      </div>
      <div class="content-list-wrapper">
        <div
          class="content-list-item"
          v-for="(hourWeather, i) in weatherData.hourly.slice(0, 24)"
          :key="hourWeather.dt"
        >
          <p class="m-0">
            {{
              i === 0 ? "Now" : dayjs(hourWeather.currentTime).format("HH:mm")
            }}
          </p>
          <p class="temperature">
            {{ `${Math.round(hourWeather.temp)}&deg;` }}
          </p>
          <img
            style="width: 50px; height: 50px"
            :src="`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@2x.png`"
          />
        </div>
      </div>
    </div>
    <div class="hourly-forecast">
      <div class="title-wrapper">
        <CalendarIcon />
        <h4 class="m-0">7-DAY FORECAST</h4>
      </div>
      <div class="content-list-wrapper">
        <div
          class="content-list-item"
          v-for="(dailyWeather, i) in weatherData.daily"
          :key="dailyWeather.dt"
        >
          <p class="m-0">
            {{
              i === 0 ? "Today" : dayjs(dailyWeather.dt * 1000).format("ddd")
            }}
          </p>
          <p style="margin: 10px 0">
            {{ dayjs(dailyWeather.dt * 1000).format("DD/MM") }}
          </p>
          <p class="temperature">
            {{ `${Math.round(dailyWeather.temp.day)}&deg;` }}
          </p>
          <img
            style="width: 50px; height: 50px"
            :src="`https://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}@2x.png`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import ClockIcon from "../../assets/icons/clock.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";

interface Props {
  weatherData: any;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.content-list-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: scroll;
}

.content-list-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  .temperature {
    font-size: 30px;
    margin: 10px 0;
  }
}

.hourly-forecast {
  background: rgba($color: $deep-blue, $alpha: 0.4);
  padding: 16px;
  border-radius: 10px;
}

.title-wrapper {
  display: flex;
  gap: 5px;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid;
}
</style>
