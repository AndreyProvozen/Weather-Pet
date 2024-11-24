// endpoints
export const MAPBOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/';
export const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/';

export const CITY_PAGE_VIEW_SEASON_IMAGE = {
  Winter: '/city-page-view/winter-image.avif',
  Spring: '/city-page-view/spring-image.avif',
  Summer: '/city-page-view/summer-image.avif',
  Autumn: '/city-page-view/autumn-image.webp',
};

export type SEASON_KEY = keyof typeof CITY_PAGE_VIEW_SEASON_IMAGE;
export const SEASONS: SEASON_KEY[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
