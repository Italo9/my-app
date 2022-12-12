import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../interfaces/User.interface";
import { useAppDispatch } from "../../app/hooks";
import { listUsersThunk } from "../../app/reducers/listUsers/thunks";
import Card from "./card";

const List = () => {
  const { listUsers } = useSelector<any, IState>((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listUsersThunk());
  }, [dispatch]);

  return (
    <div>
      {listUsers.map((elem, index) => (
        <Card
          key={index}
          address={elem.address}
          email={elem.email}
          name={elem.name}
          phone={elem.phone}
          username={elem.username}
        />
      ))}
    </div>
  );
};

export default List;
