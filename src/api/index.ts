import { MAPBOX_BASE_URL, OPENWEATHER_BASE_URL } from '@/constants';
import type {
  CitiesAutoCompleteResponse,
  CoordinatesProps,
  OneCallWeatherData,
  getShortWeatherDataProps,
} from '@/interface';

import { customFetch } from '@/utils';
import type { LocationQueryValue } from 'vue-router';

const MAPBOX_API_KEY = import.meta.env.VITE_APP_MAPBOX_API_KEY;
const WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;

export const fetchCitiesAutoComplete = async (searchQuery: string): Promise<CitiesAutoCompleteResponse> =>
  await customFetch(`${MAPBOX_BASE_URL}mapbox.places/${searchQuery}.json?access_token=${MAPBOX_API_KEY}&types=place`);

interface getFullWeatherDataProps {
  lat: LocationQueryValue;
  lon: LocationQueryValue;
}

export const getFullWeatherData = async ({ lat, lon }: getFullWeatherDataProps): Promise<OneCallWeatherData> =>
  await customFetch(
    `${OPENWEATHER_BASE_URL}onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&exclude=minutely`
  );

export const getShortWeatherData = async ({ lat, lon }: CoordinatesProps): Promise<getShortWeatherDataProps> =>
  await customFetch(`${OPENWEATHER_BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
