/* File takes care of the functionality needed to access the CurrentUser State in every file.
Since defined in a context, the state is global and can be accessed from any parent component.
The CurrentUser state is quite important for the full functionality of project, as almost every
section uses the CurrentUser information in some way.

File also takes care of loading... functionality. This makes sure that the app checks to see if there is a
user it loads and can be accessed. Because if there's no CurrentUser, app will redirect user to the root page.
*/

//imports needed for context
import React, { useEffect, useState } from "react";
import { auth } from "../services/firebase";

// Creating Context for Authentication
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  //The user state that will be passed to other components
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  //setting the state that will be used in the context provider, when user logs in
  //In effect hook to make it run only when page loads
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

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
