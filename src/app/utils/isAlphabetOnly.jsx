// Checks if the string contains only alphabets (A–Z or a–z)
export const isAlphabetOnly = (value) => {
  return /^[A-Za-z\s]+$/.test(value) ? 1 : 0;
};
