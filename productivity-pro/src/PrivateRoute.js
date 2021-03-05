//imports for Private Route (only accesed when user is loggen in)
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "././context/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // Context needed to check if user is logged in to access private route
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (currentUser !== null) {
          return <RouteComponent {...routeProps} />;
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
