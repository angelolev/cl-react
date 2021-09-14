import { types } from "../types";
import { db, getFirebaseData } from "../services/firebase";

export const setGroups = (groups) => ({
  type: types.setGroups,
  payload: { groups },
});

export const getGroupsFirebase = () => {
  return async (dispatch) => {
    // db.collection("groups")
    //   .get()
    //   .then((querySnapshot) => {
    //     const loadedGroups = [];
    //     querySnapshot.forEach((doc) => {
    //       const currentDoc = doc.data();
    //       currentDoc.id = doc.id;
    //       loadedGroups.push(currentDoc);
    //     });
    //     dispatch(setGroups(loadedGroups));
    //   });

    const response = await getFirebaseData("groups");
    console.log(response, "respuesta fb");
    dispatch(setGroups(response));
  };
};
