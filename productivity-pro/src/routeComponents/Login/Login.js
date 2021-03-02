//imports for Login Components, (Router, Hooks, Icons)
import React, { useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { auth } from "../../services/firebase";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { AuthContext } from "../../Auth";
import "./Login.css";

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
    <div id="loginForm">
      <form onSubmit={handleLogin}>
        <h1 id="login">Login</h1>
        <div id="email">
          <AiOutlineMail id="emailicon" />
          <input
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
            required={true}
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div id="password">
          <RiLockPasswordFill id="passwordicon" />
          <input
            name="password"
            value={password}
            type="password"
            required={true}
            onChange={handlePasswordChange}
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <button type="submit">Enter Account</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
