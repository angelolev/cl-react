import { types } from "../types";

export const getLessonResources = (lessonResources) => ({
  type: types.getLessonResources,
  payload: lessonResources,
});
