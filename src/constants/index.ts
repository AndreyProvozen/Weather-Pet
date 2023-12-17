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

export const SEASONS: (keyof typeof MODAL_SEASON_IMAGE)[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
