import { AppDispatch } from "../../store";
import  { result }  from "../../../helpers/requestGetUser";
import { listUsers } from "./actions";

export const listUsersThunk = () => async (dispatch: AppDispatch) => {
  try {
    await result().then((response) => {
    dispatch(listUsers(response.data));
});
  } catch (error) {
    console.error(error);
  }
};
