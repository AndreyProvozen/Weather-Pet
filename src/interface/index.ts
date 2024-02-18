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

interface CoordinatesProps {
  lon: number;
  lat: number;
}

interface WeatherProps {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainProps {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface WindProps {
  speed: number;
  deg: number;
  gust: number;
}

export default interface WeatherData {
  coord: CoordinatesProps;
  weather: WeatherProps[];
  base: string;
  main: MainProps;
  visibility: number;
  wind: WindProps;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CityListItemData {
  id: string;
  state: string;
  city: string;
  coordinates: CoordinatesProps;
}

export interface CityListDataWithWeather extends CityListItemData {
  weather: WeatherData;
}
