import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import reduceCreateUser from "./reducers/registration/reducer";
import reduceDeleteUser from "./reducers/dashboard/reducer";
import reduceEditUser from "./reducers/editProfile/reducer";
import reduceListUser from "./reducers/listUsers/reducer";

const reducers = combineReducers({
  listUsers: reduceListUser,
  createUser: reduceCreateUser,
  deleteUser: reduceDeleteUser,
  editUser: reduceEditUser,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type AppDispatch = ThunkDispatch<{}, {}, any>;
