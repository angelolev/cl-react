import { types } from "../types";
import { db, getFirebaseData } from "../services/firebase";

export const setLessons = (lessons) => ({
  type: types.setLessons,
  payload: { lessons },
});

export const getCurrentLesson = (lesson) => ({
  type: types.getCurrentLesson,
  payload: { lesson },
});

export const setLessonsCategories = (categories) => ({
  type: types.setLessonsCategories,
  payload: { categories },
});

export const getLessonsFirebase = () => {
  return async (dispatch) => {
    db.collection("lessons")
      .orderBy("group")
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const loadedData = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedData.push(currentDoc);
        });
        dispatch(setLessons(loadedData));
      });
  };
};

export const getLessonsFiltered = (type) => {
  return async (dispatch) => {
    db.collection("lessons")
      .where("type", "==", type)
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const loadedData = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedData.push(currentDoc);
        });
        dispatch(setLessons(loadedData));
      });
  };
};

export const getLesson = (link) => {
  return async (dispatch) => {
    db.collection("lessons")
      .where("link", "==", link)
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const loadedData = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedData.push(currentDoc);
        });
        dispatch(getCurrentLesson(loadedData));
      });
  };
};

export const getLessonsCategories = () => {
  return async (dispatch) => {
    db.collection("lessons")
      .get()
      .then((querySnapshot) => {
        const loadedData = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedData.push(currentDoc.type);
        });

        dispatch(setLessonsCategories(loadedData));
      });
  };
};
