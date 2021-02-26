//imports for Sign up Component (Routes, Hooks and Icons)
import React, { useState } from "react";
import { withRouter } from "react-router";
import { auth, db } from "../services/firebase";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "./SignUp.css";

//Form is extremely similar to sign up form
const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to handle user authentication when user submits sign up form
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      localStorage.setItem("user", user.email);

      //creating collection for user when they sign up
      await db.collection("users").doc(user.uid).set({
        notes: [],
      });
      console.log("success");
      history.push("/home");
    } catch (error) {
      alert(error);
    }
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
