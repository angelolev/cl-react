import { types } from "../types";

const INITIAL_STATE = {
  likesList: [],
  currentLike: null,
};

export const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.addLike:
      return {
        likesList: [...state.likesList, action.payload],
      };

    case types.getLessonQuestionsLikes: {
      return {
        ...state,
        likesList: [...state.likesList, action.payload],
      };
    }

    default:
      return state;
  }
};
