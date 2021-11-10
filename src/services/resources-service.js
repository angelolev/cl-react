import { getLessonResources } from "../store/actions/resources";
import { getFirebaseCollectionDataWithQueryAndOrder } from "./firebase";

export const getLessonResourcesList = (id) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQueryAndOrder(
      "resources",
      ["session_id", "==", id],
      "title"
    );
    dispatch(getLessonResources(response));
  };
};
