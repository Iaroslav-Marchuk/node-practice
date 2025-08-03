import { validCategory } from '../constants/constants.js';

const parseCategory = (category) => {
  if (typeof category !== 'string') {
    return;
  }
  if (!validCategory.includes(category)) {
    return;
  }
  return category;
};

const parseNumber = (value) => {
  const number = Number(value);

  if (Number.isNaN(number)) {
    return;
  }
  return number;
};

export const parseFilterParams = (queryParams) => {
  const { category, minPrice, maxPrice } = queryParams;

  return {
    category: parseCategory(category),
    minPrice: parseNumber(minPrice),
    maxPrice: parseNumber(maxPrice),
  };
};
