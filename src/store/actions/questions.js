import { types } from "../types";

export const getCurrentQuestion = (question) => ({
  type: types.getCurrentQuestion,
  payload: question,
});

export const addQuestion = (question) => ({
  type: types.addQuestion,
  payload: question,
});

export const getLessonQuestions = (lessonQuestions) => ({
  type: types.getLessonQuestions,
  payload: lessonQuestions,
});
