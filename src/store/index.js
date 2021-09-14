import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/auth";
import { recommendedCoursesReducer } from "../reducers/recommendedCourses-reducers";
import { groupsReducer } from "../reducers/groups";
import { categoriesReducer } from "../reducers/categories";
import { lessonsReducer } from "../reducers/lessons";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  recommendedCourses: recommendedCoursesReducer,
  groups: groupsReducer,
  categories: categoriesReducer,
  lessons: lessonsReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
