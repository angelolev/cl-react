import { types } from "../types";

const INITIAL_STATE = {
  categoriesList: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setCategories:
      return {
        categoriesList: action.payload.categories,
      };

    default:
      return state;
  }
};
