import { SUCCESS_CREATE } from "./actionTypes";

export const createUsers = (response: number) => ({
  type: SUCCESS_CREATE,
  response,
});
