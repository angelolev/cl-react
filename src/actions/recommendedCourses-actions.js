import { types } from "../types";
import { db } from "../services/firebase";

export const setRecommendedCourses = (courses) => ({
  type: types.setRecommendedCourses,
  payload: { courses },
});

export const getRecommendedCoursesFirebase = () => {
  return (dispatch) => {
    db.collection("recommendedCourses")
      .orderBy("id")
      .get()
      .then((querySnapshot) => {
        const loadedCourses = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedCourses.push(currentDoc);
        });
        dispatch(setRecommendedCourses(loadedCourses));
      });
  };
};
