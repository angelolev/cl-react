import {
  addComment,
  getQuestionComments,
  getLessonQuestionComments,
} from "../store/actions/comments";
import {
  addCommentToQuestionFirebase,
  getFirebaseCollectionDataWithQueryAndOrder,
  getFirebaseCollectionDataWithQuery,
} from "./firebase";

export const addCommentToQuestion = (comment) => {
  return async (dispatch) => {
    await addCommentToQuestionFirebase(comment);
    dispatch(addComment(comment));
  };
};

export const getQuestionCommentsList = (questionId) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQueryAndOrder(
      "comments",
      ["question_id", "==", questionId],
      "description"
    );
    dispatch(getQuestionComments(response));
  };
};

export const getLessonQuestionCommentsList = (questionId) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQuery("comments", [
      "question_id",
      "==",
      questionId,
    ]);
    dispatch(getLessonQuestionComments(response));
  };
};
