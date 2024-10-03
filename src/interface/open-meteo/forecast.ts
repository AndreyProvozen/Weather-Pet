interface DailyWeatherProps {
  time: string[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  uv_index_max: number[];
}

interface HourlyWeatherProps {
  time: string[];
  apparent_temperature: number[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  dew_point_2m: number[];
  cloud_cover: number[];
  precipitation: number[];
  weather_code: number[];
  visibility: number[];
  is_day: number[];
}

interface CurrentWeatherProps {
  time: string;
  interval: number;
  temperature_2m: number;
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
