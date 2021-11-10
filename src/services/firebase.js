import firebase from "firebase";
import { config } from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const getFirebaseCollectionData = (collection) => {
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

export const getFirebaseDocData = (collection, docId) => {
  return db
    .collection(collection)
    .doc(docId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No existe la clase!");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export const getFirebaseCollectionDataOrdered = (collection, order) => {
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

export const getFirebaseCollectionDataDoubleOrdered = (
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

export const getFirebaseCollectionDataWithQueryAndOrder = (
  collection,
  query,
  order
) => {
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

export const getFirebaseCollectionDataWithQuery = (collection, query) => {
  return db
    .collection(collection)
    .where(...query)
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

// export const addQuestionOnLessonFirebase = async (question, id) => {
//   const response = await db
//     .collection("lessons")
//     .doc(id)
//     .update({
//       questions: firebase.firestore.FieldValue.arrayUnion(question),
//     })
//     .then(() => {
//       console.log("Pregunta agregada");
//     });

//   return response;
// };

export const addQuestionOnLessonFirebase = async (question) => {
  const response = await db
    .collection("questions")
    .add(question)
    .then(() => {
      console.log("Pregunta agregada");
    });

  return response;
};

export const addCommentToQuestionFirebase = async (comment) => {
  const response = await db
    .collection("comments")
    .add(comment)
    .then(() => {
      console.log("Comentario agregada");
    });

  return response;
};

export const addLikeQuestionFirebase = async (like) => {
  const response = await db
    .collection("likes")
    .add(like)
    .then(() => {
      console.log("liked action");
    });

  return response;
};
