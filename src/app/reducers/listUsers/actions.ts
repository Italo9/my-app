import { UserModel } from "../../../interfaces/User.interface";
import { LIST_USERS } from "./actionTypes";

export const listUsers = (response: UserModel[]) => ({
  type: LIST_USERS,
  response,
});
