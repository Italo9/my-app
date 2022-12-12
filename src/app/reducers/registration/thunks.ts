import  toast  from 'react-hot-toast';
import { AppDispatch } from "../../store";
import { UserModel } from "../../../interfaces/User.interface";

import  { result }  from "../../../helpers/requestCreateUser";
import { createUsers } from "./actions";

export const createUsersThunk =
  (data: UserModel) => async (dispatch: AppDispatch) => {
    try {
      await result(data).then((response) => {
        toast.success("Cadastro realizado com sucesso!");
        dispatch(createUsers(response.status));
      });
    } catch (error) {
      toast.error("Cadastro não foi realizado!");
    }
  };
