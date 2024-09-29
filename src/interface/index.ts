export * from './open-meteo';
export * from './mapbox';

export interface CoordinatesProps {
  lon: number;
  lat: number;
}

export interface WeatherProps {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface SavedCitiesProps {
  id: string;
  state: string;
  city: string;
  coordinates: CoordinatesProps;
}
