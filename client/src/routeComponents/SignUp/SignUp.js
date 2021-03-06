/* Contains all of the functionality for the Sign Up Page
  Uses firebase authentication to make sure that no account with 
  the same email has been created before. If sign up is succesful,
  user is brought to the home page of app (Private Route).
*/

//imports for Sign up Component (Routes, Hooks and Icons)
import React, { useState } from "react";
import { withRouter } from "react-router";
import { auth, db } from "../../services/firebase";
import {
  SignUpWrapper,
  SignUpForm,
  SignUpHeading,
  SignUpEmailWrapper,
  SignUpPasswordWrapper,
  SignUpInput,
  SignUpEmailIcon,
  SignUpPasswordIcon,
  SignUpButton,
} from "./SignUpElements";

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
          friends: [],
        });
        db.collection("emails").doc(cred.user.email).set({
          email: cred.user.email,
          todosCompleted: 0,
          pomodoros: 0,
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
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSignUp}>
        <SignUpHeading>Sign up</SignUpHeading>
        <SignUpEmailWrapper>
          <SignUpEmailIcon />
          <SignUpInput
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
            required={true}
            placeholder="Email"
            autoComplete="off"
          />
        </SignUpEmailWrapper>
        <SignUpPasswordWrapper>
          <SignUpPasswordIcon />
          <SignUpInput
            name="password"
            value={password}
            type="password"
            required={true}
            onChange={handlePasswordChange}
            placeholder="Password"
            autoComplete="off"
          />
        </SignUpPasswordWrapper>
        <SignUpButton type="submit">Create Account</SignUpButton>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default withRouter(SignUp);
