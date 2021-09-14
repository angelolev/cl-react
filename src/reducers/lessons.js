import { types } from "../types";

const INITIAL_STATE = {
  lessons: null,
  currentLesson: null,
  lessonsCategories: null,
};

export const lessonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setLessons:
      return {
        lessons: action.payload.lessons,
      };

    case types.getCurrentLesson:
      return {
        currentLesson: action.payload,
      };

    case types.setLessonsCategories:
      return {
        lessonsCategories: action.payload,
      };

    default:
      return state;
  }
};
