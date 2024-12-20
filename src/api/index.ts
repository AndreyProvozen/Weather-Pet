import { MAPBOX_BASE_URL, OPEN_METEO_BASE_URL } from '@/constants';
import type { CitiesAutoCompleteResponse, CoordinatesProps } from '@/interface';

const config = useRuntimeConfig();

export const getFullWeatherData = async ({ lat, lon }: CoordinatesProps) => {
  const currentProps = 'temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m';
  // apparent_temperature
  const hourlyParams = 'temperature_2m,cloud_cover,visibility,precipitation_probability,weather_code,is_day';
  const dailyParams = 'sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max,weather_code';

  return await customFetch(
    `${OPEN_METEO_BASE_URL}forecast?latitude=${lat}&longitude=${lon}&current=${currentProps}&hourly=${hourlyParams}&daily=${dailyParams}&timezone=auto&forecast_hours=24&forecast_days=10`
  );
};

export const fetchCitiesAutoComplete = async (searchQuery: string): Promise<CitiesAutoCompleteResponse> => {
  return await customFetch(
    `${MAPBOX_BASE_URL}mapbox.places/${searchQuery}.json?access_token=${config.public.MAPBOX_API_KEY}&types=place`
  );
};
