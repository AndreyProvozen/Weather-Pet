import autumnModalImage from "../assets/images/AddCityModal/autumn-image.jpg";
import winterModalImage from "../assets/images/AddCityModal/winter-image.jpg";
import springModalImage from "../assets/images/AddCityModal/spring-image.jpg";
import summerModalImage from "../assets/images/AddCityModal/summer-image.jpg";

export const SEASON_IMAGE_URLS = {
  Winter: winterModalImage,
  Spring: springModalImage,
  Summer: summerModalImage,
  Autumn: autumnModalImage,
};

export const SEASONS: (keyof typeof SEASON_IMAGE_URLS)[] = [
  "Winter",
  "Spring",
  "Summer",
  "Autumn",
];
