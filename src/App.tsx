import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "./features/pages/Home";
import  EditUser from "./features/pages/EditUser";
import NewUser from "./features/pages/NewUser"
import DeleteUser from "./features/pages/DeleteUser";
import ListUsers from "./features/pages/ListUsers"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={NewUser} />
          <Route exact path="/dashboard" component={DeleteUser} />
          <Route exact path="/list-users" component={ListUsers} />
          <Route exact path="/edit-profile" component={EditUser} />
        </Switch>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
