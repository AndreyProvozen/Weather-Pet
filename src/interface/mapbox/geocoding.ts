export interface CityData {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: string;
    coordinates: number[];
  };
}

export interface CitiesAutoCompleteResponse {
  features: CityData[];
  query: string[];
  attribution: string;
  type: string;
}
