import { types } from "../types";
import { getFirebaseDataOrdered } from "../../services/firebase";

export const setRecommendedCourses = (courses) => ({
  type: types.setRecommendedCourses,
  payload: { courses },
});

export const getRecommendedCoursesFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseDataOrdered("recommendedCourses", "id");
    dispatch(setRecommendedCourses(response));
  };
};
