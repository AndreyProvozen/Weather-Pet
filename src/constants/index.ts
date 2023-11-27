import autumnModalImage from "../assets/images/autumn-modal-image.jpg";
import winterModalImage from "../assets/images/winter-modal-image.jpg";
import springModalImage from "../assets/images/spring-modal-image.jpg";
import summerModalImage from "../assets/images/summer-modal-image.jpg";

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
