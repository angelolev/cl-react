import firebase from "firebase";
import { config } from "./firebaseConfig";

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.database();
