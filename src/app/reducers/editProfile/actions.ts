import { SUCCESS_EDIT } from "./actionTypes";

export const editUsers = (response: number) => ({
  type: SUCCESS_EDIT,
  response,
});
