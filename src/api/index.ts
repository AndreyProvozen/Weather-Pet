import { MAPBOX_BASE_URL, OPENWEATHER_BASE_URL } from '@/constants';
import { CitiesAutoCompleteResponse, OneCallWeatherData } from '@/interface';
import customFetch from '@/utils/customFetch';
import { type LocationQueryValue } from 'vue-router';

export const fetchCitiesAutoComplete = async (searchQuery: string): Promise<CitiesAutoCompleteResponse> =>
  await customFetch(
    `${MAPBOX_BASE_URL}mapbox.places/${searchQuery}.json?access_token=${
      import.meta.env.VITE_APP_MAPBOX_API_KEY
    }&types=place`
  );

interface getFullWeatherDataProps {
  lat: LocationQueryValue;
  lon: LocationQueryValue;
}

export const getFullWeatherData = async ({ lat, lon }: getFullWeatherDataProps): Promise<OneCallWeatherData> =>
  await customFetch(
    `${OPENWEATHER_BASE_URL}onecall?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }&units=metric&exclude=minutely`
  );
