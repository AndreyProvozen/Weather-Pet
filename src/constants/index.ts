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

export const QUALITY_SECTION_DATA = [
  {
    title: 'Accuracy',
    description:
      'Our accuracy is achieved through a meticulous process that leverages the latest data and advanced algorithms, ensuring precision in every detail.',
    animatedNumber: {
      from: 0,
      to: 95,
    },
  },
  {
    title: 'Coverage',
    description:
      'Our coverage spans the globe, providing comprehensive updates from every corner of the world, keeping you well-informed and up-to-date with the latest developments.',
    animatedNumber: {
      from: 0,
      to: 100,
    },
  },
  {
    title: 'Timeliness',
    description:
      'We pride ourselves on delivering prompt updates, keeping you ahead of the curve and ensuring you have the information you need when you need it most.',
    animatedNumber: {
      from: 0,
      to: 100,
    },
  },
  {
    title: 'Reliability',
    description:
      'Our reliability is unmatched, providing consistent forecasts that you can trust to make informed decisions with confidence.',
    animatedNumber: {
      from: 0,
      to: 98,
    },
  },
  {
    title: 'Efficiency',
    description:
      'We prioritize efficiency in every aspect of our operations, streamlining processes to deliver optimal performance and value to our users.',
    animatedNumber: {
      from: 0,
      to: 100,
    },
  },
];

export const TRUSTED_BY_LIST = [
  { name: 'Necklace', icon: 'necklace' },
  { name: 'Cardboard', icon: 'cardboard' },
  { name: 'Honey Jar', icon: 'honey-jar' },
  { name: 'Purple Ouija', icon: 'purple-ouija' },
  { name: 'Sand Bucket', icon: 'sand-bucket' },
  { name: 'Straw Basket', icon: 'straw-basket' },
  { name: 'Green Pipe', icon: 'green-pipe' },
  { name: 'Stylish Bag', icon: 'stylish-bag' },
  { name: 'Cauldron', icon: 'cauldron' },
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

export const MOCKED_TESTIMONIALS = [
  {
    rating: 5,
    name: 'David Tom',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    specialty: 'CEO, Company',
    image: '',
  },
  {
    rating: 4,
    name: 'Sarah Johnson',
    review:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    specialty: 'Marketing Director, BrandX',
    image: '',
  },
  {
    rating: 5,
    name: 'Michael Lee',
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    specialty: 'CFO, Financial Corp',
    image: '',
  },
  {
    rating: 3,
    name: 'Emily Clark',
    review:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    specialty: 'HR Manager, People First',
    image: '',
  },
  {
    rating: 4,
    name: 'James Wilson',
    review:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    specialty: 'CTO, Tech Innovators',
    image: '',
  },
];

export const FOOTER_COLUMN_LINKS = [
  {
    name: 'GETTING STARTED',
    links: [
      { title: 'Get in touch', href: '#' },
      { title: 'Help Centre', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Help Centre', href: '#' },
    ],
  },
  {
    name: 'Legal',
    links: [
      { title: 'Cookie Policy', href: '#' },
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms & Conditions', href: '#' },
      { title: 'Cookie Settings', type: 'cookie' },
    ],
  },
  {
    name: 'CONTACTS',
    links: [
      { title: '+1-825-888-0431', type: 'phone' },
      { title: 'anprovozens@gmail.com', type: 'email' },
    ],
  },
];

export const FOOTER_SOCIAL_LINKS = [
  { href: 'https://twitter.com', type: 'twitter' },
  { href: 'https://www.facebook.com', type: 'facebook' },
  { href: 'https://www.instagram.com', type: 'instagram' },
  { href: 'https://www.linkedin.com', type: 'linkedIn' },
];

// endpoints

export const MAPBOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/';
export const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
