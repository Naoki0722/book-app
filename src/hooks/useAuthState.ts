// このhooksは使わなくなったが、今後の知見として残しておく
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "../config/firebase";

export const useAuthState = (): boolean => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  });
  return auth;
};
