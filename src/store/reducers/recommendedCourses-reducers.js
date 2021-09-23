import { types } from "../types";

const INITIAL_STATE = {
  courses: null,
};

export const recommendedCoursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setRecommendedCourses:
      return {
        courses: action.payload.courses,
      };

    default:
      return state;
  }
};
