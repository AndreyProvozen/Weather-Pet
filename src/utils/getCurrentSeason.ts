import dayjs from "dayjs";
import { SEASONS } from "../constants";

/**
 * Returns the current season based on the current date.
 *
 * @example
 * const currentSeason = getCurrentSeason();
 * console.log(`The current season is ${currentSeason}`);
 *
 * @returns {typeof SEASONS[number]} The current season (Winter, Spring, Summer, or Autumn)
 */

const getCurrentSeason = (): (typeof SEASONS)[number] => {
  const currentMonth = dayjs().month();
  const seasonIndex = Math.floor((currentMonth % 12) / 3);

  return SEASONS[seasonIndex];
};

export default getCurrentSeason;
