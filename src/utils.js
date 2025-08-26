/**
 * Returns the equivalent tailwind font weight class based on number value,
 * if the value is not found or valid, the default will be font-normal.
 *
 * @param {number} weight 
 * @returns {string} relative tailwind font weight class.
 * */
export function getFontWeight(weight) {
  if (typeof weight !== 'number') {
    throw new Error("[ERROR]: Invalid parameter type. Expected number.");
  }

  const map = {
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
  };

  return map[weight] || 'font-normal';
}

