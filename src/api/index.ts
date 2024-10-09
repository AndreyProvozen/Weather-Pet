import { MAPBOX_BASE_URL, OPEN_METEO_BASE_URL } from '@/constants';
import type { CitiesAutoCompleteResponse, CoordinatesProps } from '@/interface';

import { customFetch } from '@/utils';

const MAPBOX_API_KEY = import.meta.env.VITE_APP_MAPBOX_API_KEY;

export const getFullWeatherData = async ({ lat, lon }: CoordinatesProps) => {
  const currentProps = 'temperature_2m,relative_humidity_2m';
  const hourlyParams =
    'apparent_temperature,temperature_2m,relative_humidity_2m,dew_point_2m,cloud_cover,precipitation,weather_code,visibility,is_day';
  const dailyParams = 'sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max,weather_code';

  return await customFetch(
    `${OPEN_METEO_BASE_URL}forecast?latitude=${lat}&longitude=${lon}&current=${currentProps}&hourly=${hourlyParams}&daily=${dailyParams}&timezone=auto&forecast_hours=24&forecast_days=10`
  );
};

export const fetchCitiesAutoComplete = async (searchQuery: string): Promise<CitiesAutoCompleteResponse> =>
  await customFetch(`${MAPBOX_BASE_URL}mapbox.places/${searchQuery}.json?access_token=${MAPBOX_API_KEY}&types=place`);
