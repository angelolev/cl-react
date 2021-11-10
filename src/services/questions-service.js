import {
  getFirebaseDocData,
  getFirebaseCollectionDataWithQueryAndOrder,
  addQuestionOnLessonFirebase,
} from "./firebase";
import {
  getCurrentQuestion,
  getLessonQuestions,
  addQuestion,
} from "../store/actions/questions";

export const getQuestion = (id) => {
  return async (dispatch) => {
    const response = await getFirebaseDocData("questions", id);
    dispatch(getCurrentQuestion(response));
  };
};

export const getLessonQuestionsList = (lessonId) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQueryAndOrder(
      "questions",
      ["lesson_id", "==", lessonId],
      "title"
    );
    dispatch(getLessonQuestions(response));
  };
};

export const addQuestionOnLesson = (question) => {
  return async (dispatch) => {
    await addQuestionOnLessonFirebase(question);
    dispatch(addQuestion(question));
  };
};
