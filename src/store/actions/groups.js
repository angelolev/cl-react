import { types } from "../types";
import { getFirebaseData } from "../../services/firebase";

export const setGroups = (groups) => ({
  type: types.setGroups,
  payload: { groups },
});

export const getGroupsFirebase = () => {
  return async (dispatch) => {
    const response = await getFirebaseData("groups");
    dispatch(setGroups(response));
  };
};
