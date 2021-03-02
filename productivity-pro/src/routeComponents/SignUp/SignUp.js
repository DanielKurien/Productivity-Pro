//imports for Sign up Component (Routes, Hooks and Icons)
import React, { useState } from "react";
import { withRouter } from "react-router";
import { auth, db } from "../../services/firebase";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "./SignUp.css";

//Form is extremely similar to sign up form
const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // function to handle user authentication when user submits sign up form
  //changed function to promises (easier to word with then async/await)
  const handleSignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        localStorage.setItem("user", cred.user.email);
        db.collection("users").doc(cred.user.uid).set({
          todos: [],
        });
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  //updates state when user changes email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //updates state when user changes password input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //code for Sign Up Component
  return (
    <div id="signUpForm">
      <form onSubmit={handleSignUp}>
        <h1 id="signup">Sign up</h1>
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
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
