import { types } from "../types";

export const addLike = (like) => ({
  type: types.addLike,
  payload: like,
});

export const getLessonQuestionLikes = (questionLikes) => ({
  type: types.getLessonQuestionsLikes,
  payload: questionLikes,
});
