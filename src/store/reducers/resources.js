import { types } from "../types";

const INITIAL_STATE = {
  resourcesList: [],
};

export const resourcesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.getLessonResources:
      return {
        ...state,
        resourcesList: action.payload,
      };

    default:
      return state;
  }
};
