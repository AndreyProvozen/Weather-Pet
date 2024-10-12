import { ForecastWeatherData } from '@/interface';

const GLOBAL_UNITS = {
  temperature: '°C',
  degree: '°',
  precipitation: 'mm',
  visibility: 'm',
  humidity: '%',
  wind: 'km/h',
};

const fetchFullWeatherDataDTO = (data: ForecastWeatherData) => ({
  daily: data.daily,
  hourly: data.hourly,
  current: data.current,
  units: GLOBAL_UNITS,
  timezone: data.timezone,
  latitude: data.latitude,
  longitude: data.longitude,
});

export default fetchFullWeatherDataDTO;
