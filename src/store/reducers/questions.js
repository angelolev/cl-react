import { types } from "../types";

const INITIAL_STATE = {
  questionsList: null,
  currentQuestion: null,
  lessonQuestions: null,
};

export const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.getCurrentQuestion:
      return {
        ...state,
        currentQuestion: action.payload,
      };

    case types.addQuestion:
      return {
        lessonQuestions: [...state.lessonQuestions, action.payload],
      };

    case types.getLessonQuestions:
      return {
        ...state,
        lessonQuestions: action.payload,
      };

    case types.addComment:
      return {
        ...state,
        currentQuestion: action.payload,
      };

    default:
      return state;
  }
};
