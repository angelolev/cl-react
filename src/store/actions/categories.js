import { types } from "../types";

export const setCategories = (categories) => ({
  type: types.setCategories,
  payload: { categories },
});
