<template>
  <div>
    <div class="container temperature-container">
      <img
        class="season-image"
        src="../assets/images/autumn-city-page-image.jpg"
        alt="season background"
      />
      <div style="width: 48%">
        <p>Hourly forecast</p>
        <div class="hourly-forecast-container">
          <div
            style="display: flex; flex-direction: column; padding: 10px"
            v-for="(hourWeather, i) in weatherData.hourly"
            :key="hourWeather.dt"
          >
            <p class="m-0">
              {{
                i === 0 ? "Now" : dayjs(hourWeather.currentTime).format("HH:mm")
              }}
            </p>
            <p class="m-0">{{ `${Math.round(hourWeather.temp)}&deg;` }}</p>
            <img
              style="width: 50px; height: 50px"
              :src="`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@2x.png`"
            />
          </div>
        </div>
      </div>
    </div>
    <div>{{ route.params.city }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import dayjs from "dayjs";

const route = useRoute();

const getWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        route.query.lat
      }&lon=${route.query.lng}&appid=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&units=metric`
    );

    const weatherResponse = await response.json();

    const localOffset = new Date().getTimezoneOffset() * 60000;

    const utc = weatherResponse.current?.dt * 1000 + localOffset;

    weatherResponse.currentTime = utc + 1000 * weatherResponse.timezone_offset;

    weatherResponse.hourly.forEach((hour: any) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime = utc + 1000 * weatherResponse.timezone_offset;
    });

    return weatherResponse;
  } catch (error) {
    console.error(error);
  }
};

const weatherData = await getWeatherData();
console.log(weatherData);
</script>

<style scoped>
.container {
  display: flex;
  font-weight: bold;
}

.temperature-container {
  display: flex;
  justify-content: space-between;
}

.hourly-forecast-container {
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: scroll;
}

.season-image {
  width: 48%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
