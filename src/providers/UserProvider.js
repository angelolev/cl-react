import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";
export const UserContext = createContext({ user: null });
export default (props) => {
  const userLS = localStorage.getItem("user");
  const [user, setuser] = useState(userLS);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user !== null) {
        const { displayName, email } = user;
        setuser({
          displayName,
          email,
        });
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
