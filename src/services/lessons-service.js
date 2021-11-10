import { setLessons, getCurrentLesson } from "../store/actions/lessons";
import {
  getFirebaseCollectionDataDoubleOrdered,
  getFirebaseCollectionDataWithQueryAndOrder,
  getFirebaseDocData,
} from "./firebase";

export const getLessonsFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataDoubleOrdered(
      "lessons",
      "group",
      "title"
    );
    dispatch(setLessons(response));
  };
};

export const getLessonsFiltered = (type) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQueryAndOrder(
      "lessons",
      ["type", "==", type],
      "title"
    );
    dispatch(setLessons(response));
  };
};

export const getLesson = (id) => {
  return async (dispatch) => {
    const response = await getFirebaseDocData("lessons", id);
    dispatch(getCurrentLesson(response));
  };
};
