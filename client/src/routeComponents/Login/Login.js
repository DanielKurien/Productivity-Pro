/* Contains all of the functionality for the Login Page
  Uses firebase authentication to make sure has an account with
  app and therefore can access the main home page, that is only 
  accesible when the user logs in.
*/

//imports for Login Components, (Router, Hooks, Icons)
import React, { useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { auth } from "../../services/firebase";
import { AuthContext } from "../.././context/Auth";
import {
  LoginWrapper,
  LoginForm,
  LoginHeading,
  LoginEmailWrapper,
  LoginPasswordWrapper,
  LoginInput,
  LoginEmailIcon,
  LoginPasswordIcon,
  LoginButton,
} from "./LoginElements";

const Login = ({ history }) => {
  //local state used to set email and password in form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // authenticating with firebase when user logs in
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //method allows user to be in the push
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  };

  //redirecting user to homepage if user context is there
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  //updates state when user changes email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //updates state when user changes password input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleLogin}>
        <LoginHeading>Login</LoginHeading>
        <LoginEmailWrapper>
          <LoginEmailIcon />
          <LoginInput
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
            required={true}
            placeholder="Email"
            autoComplete="off"
          />
        </LoginEmailWrapper>
        <LoginPasswordWrapper>
          <LoginPasswordIcon />
          <LoginInput
            name="password"
            value={password}
            type="password"
            required={true}
            onChange={handlePasswordChange}
            placeholder="Password"
            autoComplete="off"
          />
        </LoginPasswordWrapper>
        <LoginButton type="submit">Enter Account</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default withRouter(Login);
