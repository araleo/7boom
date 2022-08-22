export const forcePositive = (num: number) => {
  return num < 0 ? 0 : num;
};

export const getNumOrBoom = (num: number) => {
  return isNumBoom(num) ? -1 : num;
};

export const isNumBoom = (num: number) => {
  return num % 7 === 0;
};
