import  toast  from 'react-hot-toast';
import { AppDispatch } from "../../store";

import  { result }  from "../../../helpers/requestDeleteUser";
import { deleteUsers } from "./actions";

export const deleteUsersThunk =
  (data: number) => async (dispatch: AppDispatch) => {
    try {
      await result(data).then((response) => {
        toast.success("Usuário Deletado com sucesso!");
        dispatch(deleteUsers(response.status));
      });
    } catch (error) {
      toast.error("Usuário não foi deletado!");
    }
  };
