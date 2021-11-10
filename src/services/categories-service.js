import { setCategories } from "../store/actions/categories";
import { getFirebaseCollectionData } from "./firebase";

export const getCategoriesFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionData("categories");
    dispatch(setCategories(response));
  };
};
