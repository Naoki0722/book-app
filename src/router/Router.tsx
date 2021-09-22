import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../compnents/pages/Home";
import { Login } from "../compnents/pages/Login";
import { NotFound } from "../compnents/pages/NotFound";
import { Register } from "../compnents/pages/Register";
import { BookRoutes } from "./BookRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <PrivateRoute path="/" exact={true}>
        <Home />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route
        path="/book"
        render={({ match: { url } }) => (
          <Switch>
            {BookRoutes.map((route) => (
              <Route
                key={route.path}
                path={`${url}${route.path}`}
                exact={route.exact}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
});
