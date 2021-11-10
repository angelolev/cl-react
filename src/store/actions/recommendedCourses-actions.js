import { types } from "../types";

export const setRecommendedCourses = (courses) => ({
  type: types.setRecommendedCourses,
  payload: { courses },
});
