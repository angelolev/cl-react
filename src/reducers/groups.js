import { types } from "../types";

const INITIAL_STATE = {
  groups: null,
};

export const groupsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setGroups:
      return {
        groups: action.payload.groups,
      };

    default:
      return state;
  }
};
