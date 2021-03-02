//Imports neeeded for App (mainly route components)
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routeComponents/Home/Home";
import Login from "./routeComponents//Login/Login";
import SignUp from "./routeComponents/SignUp/SignUp";
import Root from "./routeComponents/Root/Root";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

const App = () => {
  return (
    // AuthProvider tag allows state from context to be passed to other components
    // Defining Routes for App
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Root} />
          <PrivateRoute exact path="/Home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
