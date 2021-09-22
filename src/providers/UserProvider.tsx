import { onAuthStateChanged } from "@firebase/auth";
import { createContext, ReactNode, useEffect, useState, VFC } from "react";
import { firebaseAuth } from "../config/firebase";

type UserContextType = {
  auth: boolean;
  loading: boolean;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type Props = {
  children: ReactNode;
};

export const UserProvider: VFC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setAuth(true);
        setLoading(false);
      } else {
        setAuth(false);
        setLoading(false);
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);
  if (loading) {
    return <p>loading.....</p>;
  } else {
    return (
      <UserContext.Provider value={{ auth, loading }}>
        {!loading && children}
      </UserContext.Provider>
    );
  }
};
