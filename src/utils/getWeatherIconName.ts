const weatherCodesList: { [key: number]: number } = {
  // Clear sky
  0: 0,
  // Partly cloudy
  1: 1,
  2: 1,
  // Overcast
  3: 3,
  // Fog
  45: 45,
  48: 45,
  // Drizzle
  51: 51,
  53: 51,
  55: 51,
  56: 51,
  57: 51,
  // Rain
  61: 61,
  63: 61,
  65: 61,
  66: 61,
  67: 61,
  // Snow
  71: 71,
  73: 71,
  75: 71,
  77: 71,
  85: 71,
  86: 71,
  // Rain showers
  80: 80,
  81: 80,
  82: 80,
  // Thunderstorm
  95: 95,
  // Thunderstorm with hail
  96: 96,
  99: 96,
};

interface Props {
  code?: number;
  isDay?: boolean;
}

const getWeatherIconName = ({ code, isDay }: Props) => {
  const imageCode = weatherCodesList?.[code as keyof typeof weatherCodesList] ?? code;
  const timeSuffix = isDay ? 'd' : 'n';

  return `${imageCode}${timeSuffix}`;
};

export default getWeatherIconName;
