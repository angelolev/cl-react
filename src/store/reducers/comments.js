import { types } from "../types";

const INITIAL_STATE = {
  commentsList: [],
  currentComment: null,
};

export const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.addComment:
      return {
        commentsList: [...state.commentsList, action.payload],
      };

    case types.getLessonQuestionsComments: {
      return {
        ...state,
        commentsList: [...state.commentsList, action.payload],
      };
    }

    case types.getQuestionComments:
      return {
        ...state,
        commentsList: action.payload,
      };

    default:
      return state;
  }
};
