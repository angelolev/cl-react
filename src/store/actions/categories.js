import { types } from "../types";
import { getFirebaseCollectionData } from "../../services/firebase";

export const setCategories = (categories) => ({
  type: types.setCategories,
  payload: { categories },
});

export const getCategoriesFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionData("categories");
    dispatch(setCategories(response));
  };
};
