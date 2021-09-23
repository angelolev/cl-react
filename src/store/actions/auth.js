import { auth } from "firebase";
import { getCurrentProvider } from "../../utils";
import { types } from "../types";

export const login = (uid, displayName, photoURL) => ({
  type: types.login,
  payload: { uid, displayName, photoURL },
});

export const logout = () => ({
  type: types.logout,
  payload: {},
});

export const signInFirebase = (provider) => {
  return async (dispatch) => {
    const response = await auth.signInWithPopup(getCurrentProvider(provider));
    const { user } = response;
    dispatch(login(user.uid, user.displayName, user.photoURL));
  };
};

export const logOutFirebase = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch(logout());
  };
};
