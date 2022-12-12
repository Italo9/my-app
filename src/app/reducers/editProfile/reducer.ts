import { IUsersActions } from "../../../interfaces/User.interface";
import { SUCCESS_EDIT } from "./actionTypes";

const initialState = 0;

const reduceEditUser = (state = initialState, action: IUsersActions) => {
  switch (action.type) {
    case SUCCESS_EDIT:
      return (state = 200);
    default:
      return state;
  }
};

export default reduceEditUser;
