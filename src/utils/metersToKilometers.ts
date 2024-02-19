/**
 * Transforms value from meters to kilometers if necessary.
 *
 * @example
 * const currentVisibility = metersToKilometers(1000);
 * console.log(`The current visibility is ${currentVisibility}`);
 *
 * @param meters - The current visibility of the city
 * @returns The current visibility in kilometers with units appended
 */

const metersToKilometers = (meters: number): string => {
  if (meters >= 1000) return `${(meters / 1000).toFixed(1)}km`;

  return `${meters}m`;
};

export default metersToKilometers;
