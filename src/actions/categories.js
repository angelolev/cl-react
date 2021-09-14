import { types } from "../types";
import { db } from "../services/firebase";

export const setCategories = (categories) => ({
  type: types.setCategories,
  payload: { categories },
});

export const getCategoriesFirebase = () => {
  return (dispatch) => {
    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        const loadedCategories = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedCategories.push(currentDoc);
        });
        dispatch(setCategories(loadedCategories));
      });
  };
};
