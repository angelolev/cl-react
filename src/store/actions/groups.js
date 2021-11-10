import { types } from "../types";

export const setGroups = (groups) => ({
  type: types.setGroups,
  payload: { groups },
});
