import  toast  from 'react-hot-toast';
import { AppDispatch } from "../../store";
import { UserModel } from "../../../interfaces/User.interface";

import  { result }  from "../../../helpers/requestUpdateUser";
import { editUsers } from "./actions";

export const editUsersThunk =
  (data: UserModel, id: number) => async (dispatch: AppDispatch) => {
    try {
      await result(id, data).then((response) => {
        toast.success("Usuário editado com sucesso!");
        dispatch(editUsers(response.status));
      });
    } catch (error) {
      toast.error("Usuário não foi editado!");
    }
  };
