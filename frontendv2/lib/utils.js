import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function checkCategoryFilter(categories, currSetCategories) {
  if (currSetCategories.length === 0) {
    return true;
  }
  for (let i = 0; i < categories.length; i++) {
    if (currSetCategories.includes(categories[i])) {
      return true;
    }
  }
  return false;
}

function checkSizeFilter(sizes, currSetSizes) {
  if (currSetSizes.length === 0) {
    return true;
  }
  for (let i = 0; i < sizes.length; i++) {
    if (currSetSizes.includes(sizes[i])) {
      return true;
    }
  }
  return false;
}

function checkThemeFilter(themes, currSetThemes) {
  if (currSetThemes.length === 0) {
    return true;
  }
  for (let i = 0; i < themes.length; i++) {
    if (currSetThemes.includes(themes[i])) {
      return true;
    }
  }
  return false;
}

function checkPriceFilter(price, currSetPriceRange) {
  if (currSetPriceRange === "") {
    return true;
  }

  if (currSetPriceRange === "Under ₹500") {
    return price <= 500;
  } else if (currSetPriceRange === "₹500 - ₹1000") {
    return price > 500 && price <= 1000;
  } else if (currSetPriceRange === "₹1000 - ₹1500") {
    return price > 1000 && price <= 1500;
  } else if (currSetPriceRange === "₹1500 - ₹2000") {
    return price > 1500 && price <= 2000;
  } else if (currSetPriceRange === "₹2000+") {
    return price > 2000;
  }

  return false;
}

export function filterCategoryData(
  item,
  currSetCategories,
  currSetSizes,
  currSetThemes,
  currSetPriceRange,
) {
  const { price, categories, sizes, themes } = item;

  return (
    checkCategoryFilter(categories, currSetCategories) &&
    checkSizeFilter(sizes, currSetSizes) &&
    checkThemeFilter(themes, currSetThemes) &&
    checkPriceFilter(price, currSetPriceRange)
  );
}
