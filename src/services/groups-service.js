import { setGroups } from "../store/actions/groups";
import { getFirebaseCollectionData } from "./firebase";

export const getGroupsFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionData("groups");
    dispatch(setGroups(response));
  };
};
