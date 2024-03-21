import autumnModalImage from '../assets/images/AddCityModal/autumn-image.jpg';
import winterModalImage from '../assets/images/AddCityModal/winter-image.jpg';
import springModalImage from '../assets/images/AddCityModal/spring-image.jpg';
import summerModalImage from '../assets/images/AddCityModal/summer-image.jpg';

import autumnCityPageViewImage from '../assets/images/CityPageView/autumn-image.jpg';
import winterCityPageViewImage from '../assets/images/CityPageView/winter-image.jpg';
import springCityPageViewImage from '../assets/images/CityPageView/spring-image.jpg';
import summerCityPageViewImage from '../assets/images/CityPageView/summer-image.jpg';

// temporary solution

export const MODAL_SEASON_IMAGE = {
  Winter: winterModalImage,
  Spring: springModalImage,
  Summer: summerModalImage,
  Autumn: autumnModalImage,
};

export const CITY_PAGE_VIEW_SEASON_IMAGE = {
  Winter: winterCityPageViewImage,
  Spring: springCityPageViewImage,
  Summer: summerCityPageViewImage,
  Autumn: autumnCityPageViewImage,
};

export type SEASON_KEY = keyof typeof MODAL_SEASON_IMAGE;
export const SEASONS: SEASON_KEY[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

// endpoints

export const MAPBOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/';
export const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
