interface UVIndexCategory {
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

const UV_INDEX_DATA: UVIndexData = {
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
