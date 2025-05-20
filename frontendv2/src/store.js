import { create } from "zustand";

export const useFilterStore = create((set) => ({
  //filter store
  categories: [],
  sizes: [],
  themes: [],
  priceRange: "",

  setCategories: (newCategories) =>
    set((state) => ({
      categories: newCategories,
    })),

  setPriceRange: (newPriceRange) =>
    set((state) => ({
      priceRange: newPriceRange,
    })),

  setSizes: (newSizes) =>
    set((state) => ({
      sizes: newSizes,
    })),

  setThemes: (newThemes) =>
    set((state) => ({
      themes: newThemes,
    })),
}));
