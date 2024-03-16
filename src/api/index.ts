import { MAPBOX_BASE_URL } from '@/constants';
import { CitiesAutoCompleteResponse } from '@/interface';
import customFetch from '@/utils/customFetch';

export const fetchCitiesAutoComplete = async (searchQuery: string): Promise<CitiesAutoCompleteResponse> =>
  await customFetch(
    `${MAPBOX_BASE_URL}mapbox.places/${searchQuery}.json?access_token=${
      import.meta.env.VITE_APP_MAPBOX_API_KEY
    }&types=place`
  );
