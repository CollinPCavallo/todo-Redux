import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../containers/App";
import EditTodo from "../components/TodoList/EditTodo/EditTodo";

const RoutedApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/edit/:id" component={EditTodo} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default RoutedApp;
