import { SUCCESS_DELETE } from "./actionTypes";

export const deleteUsers = (response: number) => ({
  type: SUCCESS_DELETE,
  response,
});
