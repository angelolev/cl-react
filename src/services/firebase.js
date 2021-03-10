import firebase from "firebase";
import { config } from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user, 'info del usuario')
  }).catch((error) => {
    console.log(error.message)
  })
}

export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}
