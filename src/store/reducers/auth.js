import { types } from "../types";

const INITIAL_STATE = {
  uid: null,
  displayName: null,
  photoURL: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };

    case types.logout:
      return INITIAL_STATE;

    default:
      return state;
  }
};
