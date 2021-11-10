import { types } from "../types";

export const addComment = (comment) => ({
  type: types.addComment,
  payload: comment,
});

export const getQuestionComments = (questionComments) => ({
  type: types.getQuestionComments,
  payload: questionComments,
});

export const getLessonQuestionComments = (questionComments) => ({
  type: types.getLessonQuestionsComments,
  payload: questionComments,
});
