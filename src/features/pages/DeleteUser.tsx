import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { IState } from "../../interfaces/User.interface";
import { deleteUsersThunk } from "../../app/reducers/dashboard/thunks";
import { useAppDispatch } from "../../app/hooks";
import { listUsersThunk } from "../../app/reducers/listUsers/thunks";

function DeleteUser() {
  const { listUsers } = useSelector<any, IState>((state) => state);
  const [idUser, setIdUser] = useState<number>(0);

   const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listUsersThunk());
  }, [dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setIdUser(Number(id));
  };

  const deleteUser = async (id: number) => {
    dispatch(deleteUsersThunk(id));
  };

  const history = useHistory();
  return (
    <div>
      <div>
        <h1>DELETAR USUÁRIO</h1>

        <button onClick={() =>  history.push('/')}>
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
        <button 
         onClick={() => {
         deleteUser(idUser);
        }}>Deletar Usuário</button>
      </div>
    </div>
  );
}

export default DeleteUser;
