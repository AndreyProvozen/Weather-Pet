import autumnModalImage from '../assets/images/AddCityModal/autumn-image.jpg';
import winterModalImage from '../assets/images/AddCityModal/winter-image.jpg';
import springModalImage from '../assets/images/AddCityModal/spring-image.jpg';
import summerModalImage from '../assets/images/AddCityModal/summer-image.jpg';

import autumnCityPageViewImage from '../assets/images/CityPageView/autumn-image.jpg';
import winterCityPageViewImage from '../assets/images/CityPageView/winter-image.jpg';
import springCityPageViewImage from '../assets/images/CityPageView/spring-image.jpg';
import summerCityPageViewImage from '../assets/images/CityPageView/summer-image.jpg';

import TrustedByNecklaceLogo from '../assets/trustedByLogos/necklace.svg';
import TrustedBCardboardLogo from '../assets/trustedByLogos/cardboard.svg';
import TrustedByHoneyJarLogo from '../assets/trustedByLogos/honey-jar.svg';
import TrustedByPurpleOuijaLogo from '../assets/trustedByLogos/purple-ouija.svg';
import TrustedBySandBucketLogo from '../assets/trustedByLogos/sand-bucket.svg';
import TrustedByStrawBasketLogo from '../assets/trustedByLogos/straw-basket.svg';
import TrustedByGreenPipeLogo from '../assets/trustedByLogos/green-pipe.svg';
import TrustedByCauldronLogo from '../assets/trustedByLogos/cauldron.svg';
import TrustedByStylishBagLogo from '../assets/trustedByLogos/stylish-bag.svg';

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

export const TRUSTED_BY_LIST = [
  { name: 'Necklace', Component: TrustedByNecklaceLogo },
  { name: 'Cardboard', Component: TrustedBCardboardLogo },
  { name: 'Honey Jar', Component: TrustedByHoneyJarLogo },
  { name: 'Purple Ouija', Component: TrustedByPurpleOuijaLogo },
  { name: 'Sand Bucket', Component: TrustedBySandBucketLogo },
  { name: 'Straw Basket', Component: TrustedByStrawBasketLogo },
  { name: 'Green Pipe', Component: TrustedByGreenPipeLogo },
  { name: 'Stylish Bag', Component: TrustedByStylishBagLogo },
  { name: 'Cauldron', Component: TrustedByCauldronLogo },
];

export interface UVIndexCategory {
  label: string;
  recommendations: string;
}

interface UVIndexData {
  low: UVIndexCategory;
  moderate: UVIndexCategory;
  high: UVIndexCategory;
  veryHigh: UVIndexCategory;
  extreme: UVIndexCategory;
}

export const UV_INDEX_DATA: UVIndexData = {
  low: {
    label: 'Low',
    recommendations:
      'Minimal protection required. Wear sunglasses on bright days; use sunscreen if there is snow on the ground, which reflects UV radiation, or if you have fair skin.',
  },
  moderate: {
    label: 'Moderate',
    recommendations:
      'Take precautions if you will be outside, such as wearing a wide-brimmed hat and sunglasses, and using sunscreen. Stay in the shade near midday when the sun is strongest.',
  },
  high: {
    label: 'High',
    recommendations:
      'Protection required. Seek shade during midday hours, cover up, wear a hat, sunglasses and sunscreen. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.',
  },
  veryHigh: {
    label: 'Very High',
    recommendations:
      'Extra protection required. Be careful outside, especially during late morning through mid-afternoon. Shirt, sunscreen, and a hat are a must. Skin damage will occur quickly without protection. Reduce time in the sun between 10:00 and 16:00.',
  },
  extreme: {
    label: 'Extreme',
    recommendations:
      'Take all precautions because unprotected skin can burn in minutes. Try to avoid sun exposure between 10:00 and 16:00. Shirt, sunscreen, hat, and sunglasses are a must. Also, seek shade whenever possible.',
  },
};

// endpoints

export const MAPBOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/';
export const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
