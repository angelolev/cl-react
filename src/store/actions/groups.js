import { types } from "../types";
import { getFirebaseCollectionData } from "../../services/firebase";

export const setGroups = (groups) => ({
  type: types.setGroups,
  payload: { groups },
});

export const getGroupsFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionData("groups");
    dispatch(setGroups(response));
  };
};
