import { IUsersActions } from "../../../interfaces/User.interface";
import { SUCCESS_DELETE } from "./actionTypes";

const initialState = 0;

const reduceDeleteUser = (state = initialState, action: IUsersActions) => {
  switch (action.type) {
    case SUCCESS_DELETE:
      return (state = 200);
    default:
      return state;
  }
};

export default reduceDeleteUser;
