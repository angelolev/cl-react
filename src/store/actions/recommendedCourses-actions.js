import { types } from "../types";
import { getFirebaseCollectionDataOrdered } from "../../services/firebase";

export const setRecommendedCourses = (courses) => ({
  type: types.setRecommendedCourses,
  payload: { courses },
});

export const getRecommendedCoursesFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataOrdered(
      "recommendedCourses",
      "id"
    );
    dispatch(setRecommendedCourses(response));
  };
};
