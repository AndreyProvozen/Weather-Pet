// import autumnModalImage from '../assets/images/AddCityModal/autumn-image.avif';
// import winterModalImage from '../assets/images/AddCityModal/winter-image.avif';
// import springModalImage from '../assets/images/AddCityModal/spring-image.avif';
// import summerModalImage from '../assets/images/AddCityModal/summer-image.avif';

import autumnCityPageViewImage from '../assets/images/CityPageView/autumn-image.webp';
import winterCityPageViewImage from '../assets/images/CityPageView/winter-image.avif';
import springCityPageViewImage from '../assets/images/CityPageView/spring-image.avif';
import summerCityPageViewImage from '../assets/images/CityPageView/summer-image.avif';

import AvatarPlaceholder1 from '../assets/images/UserAvatars/placeholder-1.webp';
import AvatarPlaceholder2 from '../assets/images/UserAvatars/placeholder-2.webp';
import AvatarPlaceholder3 from '../assets/images/UserAvatars/placeholder-3.avif';
import AvatarPlaceholder4 from '../assets/images/UserAvatars/placeholder-4.webp';
import AvatarPlaceholder5 from '../assets/images/UserAvatars/placeholder-5.avif';

// endpoints

export const MAPBOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/';
export const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/';

// temporary solution

// export const MODAL_SEASON_IMAGE = {
//   Winter: winterModalImage,
//   Spring: springModalImage,
//   Summer: summerModalImage,
//   Autumn: autumnModalImage,
// };

export const CITY_PAGE_VIEW_SEASON_IMAGE = {
  Winter: winterCityPageViewImage,
  Spring: springCityPageViewImage,
  Summer: summerCityPageViewImage,
  Autumn: autumnCityPageViewImage,
};

export type SEASON_KEY = keyof typeof CITY_PAGE_VIEW_SEASON_IMAGE;
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

export const MOCKED_TESTIMONIALS = [
  {
    rating: 5,
    name: 'David Tom',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    specialty: 'CEO, Company',
    image: AvatarPlaceholder1,
  },
  {
    rating: 4,
    name: 'Sarah Johnson',
    review:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    specialty: 'Marketing Director, BrandX',
    image: AvatarPlaceholder2,
  },
  {
    rating: 5,
    name: 'Michael Lee',
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    specialty: 'CFO, Financial Corp',
    image: AvatarPlaceholder3,
  },
  {
    rating: 3,
    name: 'Emily Clark',
    review:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    specialty: 'HR Manager, People First',
    image: AvatarPlaceholder4,
  },
  {
    rating: 4,
    name: 'James Wilson',
    review:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    specialty: 'CTO, Tech Innovators',
    image: AvatarPlaceholder5,
  },
];
