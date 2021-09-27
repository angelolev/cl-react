import { types } from "../types";

const INITIAL_STATE = {
  groupsList: null,
};

export const groupsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setGroups:
      return {
        groupsList: action.payload.groups,
      };

    default:
      return state;
  }
};
