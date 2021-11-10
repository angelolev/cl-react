import { getFirebaseCollectionDataOrdered } from "./firebase";
import { setRecommendedCourses } from "../store/actions/recommendedCourses-actions";

export const getRecommendedCoursesFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataOrdered(
      "recommendedCourses",
      "id"
    );
    dispatch(setRecommendedCourses(response));
  };
};
