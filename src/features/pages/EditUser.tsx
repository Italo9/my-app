import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { IState, UserModel } from "../../interfaces/User.interface";
import { result } from "../../helpers/requestUpdateUser";
import AuxiliaryUpdateUser from '../components/auxiliaryUpdateUser';
import { useAppDispatch } from "../../app/hooks";
import { listUsersThunk } from "../../app/reducers/listUsers/thunks";
function EditUser() {
  const { listUsers } = useSelector<any, IState>((state) => state);
  const [idUser, setIdUser] = useState<number>(1);
  const [user, setUser] = useState<UserModel>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(listUsersThunk());
  }, [dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setIdUser(Number(id));
  };

  useEffect(() => {
    async function apiGet() {
      await result(idUser).then((res) => setUser(res.data));
    }
    apiGet();
  }, [idUser]);

  const history = useHistory();

  return (
    <div>
      <div>
        <h1>EDITAR USUÁRIO</h1>

        <button onClick={() => history.push('/')}>
          Voltar Home
        </button>
      </div>
      <div>
        <h3>Nome do Usuário</h3>
        <select onChange={onChangeHandler} name="Users" id="user">
          {listUsers?.map((elem, index) => (
            <option key={index} value={elem.id}>
              {elem.username}
            </option>
          ))}
        </select>
        {user && <AuxiliaryUpdateUser props={user} />}
      </div>
    </div>
  );
}


export default EditUser;
