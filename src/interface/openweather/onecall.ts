import { WeatherProps } from '.';

// todo improve types

interface CommonWeatherProps {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  weather: WeatherProps[];
}

interface FeelsLikeProps {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface CurrentWeatherProps extends CommonWeatherProps {
  feels_like: number;
  temp: number;
  visibility: number;
}

export interface DailyWeatherProps extends CommonWeatherProps {
  moon_phase: number;
  feels_like: FeelsLikeProps;
  moonrise: number;
  moonset: number;
  pop: number;
}

export interface HourlyWeatherProps extends CommonWeatherProps {
  feels_like: number;
  temp: number;
  pop: number;
  visibility: number;
}

export interface OneCallWeatherData {
  lat: number;
  lon: number;
  currentTime?: any;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherProps;
  daily: DailyWeatherProps[];
  hourly: HourlyWeatherProps[];
}
