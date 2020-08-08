import firebase from "firebase";
import { config } from "./firebaseConfig";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
