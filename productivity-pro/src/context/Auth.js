//imports needed for context
import React, { useEffect, useState } from "react";
import { auth } from "../services/firebase";

// Creating Context for Authentication
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  //The user state that will be passed to other components
  const [currentUser, setCurrentUser] = useState(null);

  //setting the state that will be used in the context provider, when user logs in
  //In effect hook to make it run only when page loads
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    //Retuning context with value set to user, so the state can be used by other components
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
