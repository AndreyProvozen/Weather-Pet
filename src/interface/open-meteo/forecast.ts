interface DailyWeatherProps {
  time: string[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  uv_index_max: number[];
  weather_code: number[];
}

interface HourlyWeatherProps {
  time: string[];
  temperature_2m: number[];
  cloud_cover: number[];
  weather_code: number[];
  is_day: number[];
  visibility: number[];
}

interface CurrentWeatherProps {
  time: string;
  interval: number;
  temperature_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  relative_humidity_2m: number;
}

export interface ForecastWeatherData {
  daily: DailyWeatherProps;
  hourly: HourlyWeatherProps;
  current: CurrentWeatherProps;
  daily_units: Record<string, string>;
  hourly_units: Record<string, string>;
  current_units: Record<string, string>;
  timezone: string;
  latitude: number;
  longitude: number;
}
