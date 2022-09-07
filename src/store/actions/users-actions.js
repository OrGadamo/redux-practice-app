import { ADD_USER, DELETE_USER, UPDATE_USER } from "../types/users-types";

export const addUserAction = (user) => {
  return { type: ADD_USER, payload: user };
};
export const updateUserAction = (user) => {
  return { type: UPDATE_USER, payload: user };
};
export const deleteUserAction = (id) => {
  return { type: DELETE_USER, payload: id };
};
