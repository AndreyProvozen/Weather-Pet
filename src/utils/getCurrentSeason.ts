import dayjs from 'dayjs';
import { SEASONS, SEASON_KEY } from '../constants';

/**
 * Returns the current season based on the current date.
 *
 * @example
 * const currentSeason = getCurrentSeason();
 * console.log(`The current season is ${currentSeason}`);
 *
 * @returns {SEASON_KEY} The current season (Winter, Spring, Summer, or Autumn)
 */

const getCurrentSeason = (): SEASON_KEY => {
  const currentMonth = dayjs().month() + 1;

  const seasonIndex = Math.floor((currentMonth % 12) / 3);

  return SEASONS[seasonIndex]!;
};

export default getCurrentSeason;
