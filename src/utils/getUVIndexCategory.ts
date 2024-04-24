import { UVIndexCategory, UV_INDEX_DATA } from '@/constants';

/**
 * Returns the current UV index category based on the current UV index.
 *
 * @example
 * ```typescript
 * const currentUVIndexCategory = getUVIndexCategory(1);
 * console.log(`The current UV index category is ${currentUVIndexCategory.label}`);
 * ```
 *
 * @param uvIndex - The current UV index
 * @returns The current UV index category
 */

const getUVIndexCategory = (uvIndex: number): UVIndexCategory => {
  const { low, moderate, high, veryHigh, extreme } = UV_INDEX_DATA;

  if (uvIndex < 3) return low;
  if (uvIndex < 6) return moderate;
  if (uvIndex < 8) return high;
  if (uvIndex < 11) return veryHigh;

  return extreme;
};

export default getUVIndexCategory;
