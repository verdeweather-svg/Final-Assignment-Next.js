// Checks if the string length is between min and max
export const charLength = (value, min, max) => {
  return value.length >= min && value.length <= max ? 1 : 0;
};
