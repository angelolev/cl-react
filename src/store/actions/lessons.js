import { types } from "../types";
import {
  getFirebaseCollectionDataDoubleOrdered,
  getFirebaseCollectionDataWithQueryAndOrder,
  addQuestionOnLessonFirebase,
  getFirebaseDocData,
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

export const addQuestion = (question) => ({
  type: types.addQuestion,
  payload: { question },
});

export const addQuestionLike = (lesson) => ({
  type: types.addQuestionLike,
  payload: { lesson },
});

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

export const addQuestionOnLesson = (question, id) => {
  return async (dispatch) => {
    await addQuestionOnLessonFirebase(question, id);
    dispatch(addQuestion(question));
  };
};
