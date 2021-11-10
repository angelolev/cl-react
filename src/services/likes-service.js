import { addLike, getLessonQuestionLikes } from "../store/actions/likes";
import {
  addLikeQuestionFirebase,
  getFirebaseCollectionDataWithQueryAndOrder,
} from "./firebase";

export const addLikeQuestion = (like) => {
  return async (dispatch) => {
    await addLikeQuestionFirebase(like);
    dispatch(addLike(like));
  };
};

export const getLessonQuestionLikesList = (questionId) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQueryAndOrder(
      "likes",
      ["question_id", "==", questionId],
      "description"
    );
    dispatch(getLessonQuestionLikes(response));
  };
};
