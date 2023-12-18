const uvIndexData = {
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

const getUVIndexCategory = (uvIndex: number) => {
  if (uvIndex < 3) {
    return uvIndexData['low'];
  }
  if (uvIndex < 6) {
    return uvIndexData['moderate'];
  }
  if (uvIndex < 8) {
    return uvIndexData['high'];
  }
  if (uvIndex < 11) {
    return uvIndexData['veryHigh'];
  }
  return uvIndexData['extreme'];
};

export default getUVIndexCategory;
