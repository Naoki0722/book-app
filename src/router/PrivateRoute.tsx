import { ReactNode, useContext, VFC } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../providers/UserProvider";

type Props = {
  path: string;
  exact: boolean;
  children: ReactNode;
};

export const PrivateRoute: VFC<Props> = (props) => {
  const context = useContext(UserContext);
  const { path, exact, children } = props;
  return (
    <Route path={path} exact={exact}>
      {context.auth ? children : <Redirect to="/login" />}
    </Route>
  );
};
