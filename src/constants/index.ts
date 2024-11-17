// endpoints
export const MAPBOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/';
export const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/';

export const CITY_PAGE_VIEW_SEASON_IMAGE = {
  Winter: '/CityPageView/winter-image.avif',
  Spring: '/CityPageView/spring-image.avif',
  Summer: '/CityPageView/summer-image.avif',
  Autumn: '/CityPageView/autumn-image.webp',
};

export type SEASON_KEY = keyof typeof CITY_PAGE_VIEW_SEASON_IMAGE;
export const SEASONS: SEASON_KEY[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
