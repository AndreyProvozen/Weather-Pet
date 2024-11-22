import { MAPBOX_BASE_URL, OPEN_METEO_BASE_URL } from '@/constants';
import type { CitiesAutoCompleteResponse, CoordinatesProps } from '@/interface';

import { customFetch } from '@/utils';

const MAPBOX_API_KEY = import.meta.env.VITE_APP_MAPBOX_API_KEY;

export const getFullWeatherData = async ({ lat, lon }: CoordinatesProps) => {
  const currentProps = 'temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m';
  // weather_code, apparent_temperature, is_day
  const hourlyParams = 'temperature_2m,cloud_cover,visibility,precipitation_probability,,weather_code';
  const dailyParams = 'sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max';

  return await customFetch(
    `${OPEN_METEO_BASE_URL}forecast?latitude=${lat}&longitude=${lon}&current=${currentProps}&hourly=${hourlyParams}&daily=${dailyParams}&timezone=auto&forecast_hours=24&forecast_days=10`
  );
};

export const fetchCitiesAutoComplete = async (searchQuery: string): Promise<CitiesAutoCompleteResponse> =>
  await customFetch(`${MAPBOX_BASE_URL}mapbox.places/${searchQuery}.json?access_token=${MAPBOX_API_KEY}&types=place`);
