import { types } from "../types";
import { getFirebaseData } from "../../services/firebase";

export const setCategories = (categories) => ({
  type: types.setCategories,
  payload: { categories },
});

export const getCategoriesFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseData("categories");
    dispatch(setCategories(response));
  };
};
