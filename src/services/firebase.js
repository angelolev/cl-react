import firebase from "firebase";
import { config } from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const getCurrentProvider = (provider) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  switch (provider) {
    case "Google":
      return googleProvider;
    case "Github":
      return githubProvider;
  }
};

export const getFirebaseData = (collection) => {
  return db
    .collection(collection)
    .get()
    .then((querySnapshot) => {
      const loadedData = [];
      querySnapshot.forEach((doc) => {
        const currentDoc = doc.data();
        currentDoc.id = doc.id;
        loadedData.push(currentDoc);
      });
      console.log(loadedData, "loaded data from firebase");
      return loadedData;
    });
};
