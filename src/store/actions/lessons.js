import { types } from "../types";

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
