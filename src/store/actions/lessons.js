import { types } from "../types";
import {
  db,
  getFirebaseData,
  getFirebaseDataDoubleOrdered,
  getFirebaseDataWithQueryAndOrder,
} from "../../services/firebase";

export const setLessons = (lessons) => ({
  type: types.setLessons,
  payload: { lessons },
});

export const getCurrentLesson = (lesson) => ({
  type: types.getCurrentLesson,
  payload: { lesson },
});

export const setLessonsCategories = (categories) => ({
  type: types.setLessonsCategories,
  payload: { categories },
});

export const getLessonsFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseDataDoubleOrdered(
      "lessons",
      "group",
      "title"
    );
    dispatch(setLessons(response));
  };
};

export const getLessonsFiltered = (type) => {
  return async (dispatch) => {
    const response = await getFirebaseDataWithQueryAndOrder(
      "lessons",
      ["type", "==", type],
      "title"
    );
    dispatch(setLessons(response));
  };
};

export const getLesson = (link) => {
  return async (dispatch) => {
    const response = await getFirebaseDataWithQueryAndOrder(
      "lessons",
      ["link", "==", link],
      "title"
    );
    dispatch(getCurrentLesson(response));
  };
};

// export const getLessonsCategories = () => {
//   return async (dispatch) => {
//     const response = await getFirebaseDataOrdered("lessons", "id");
//     dispatch(setLessonsCategories(response));
//   };
// };
