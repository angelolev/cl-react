import firebase from "firebase";
import { config } from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

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

      return loadedData;
    });
};

export const getFirebaseDataOrdered = (collection, order) => {
  return db
    .collection(collection)
    .orderBy(order)
    .get()
    .then((querySnapshot) => {
      const loadedData = [];
      querySnapshot.forEach((doc) => {
        const currentDoc = doc.data();
        currentDoc.id = doc.id;
        loadedData.push(currentDoc);
      });

      return loadedData;
    });
};

export const getFirebaseDataDoubleOrdered = (
  collection,
  firstOrder,
  secondOrder
) => {
  return db
    .collection(collection)
    .orderBy(firstOrder)
    .orderBy(secondOrder)
    .get()
    .then((querySnapshot) => {
      const loadedData = [];
      querySnapshot.forEach((doc) => {
        const currentDoc = doc.data();
        currentDoc.id = doc.id;
        loadedData.push(currentDoc);
      });

      return loadedData;
    });
};

export const getFirebaseDataWithQueryAndOrder = (collection, query, order) => {
  return db
    .collection(collection)
    .where(...query)
    .orderBy(order)
    .get()
    .then((querySnapshot) => {
      const loadedData = [];
      querySnapshot.forEach((doc) => {
        const currentDoc = doc.data();
        currentDoc.id = doc.id;
        loadedData.push(currentDoc);
      });

      return loadedData;
    });
};
