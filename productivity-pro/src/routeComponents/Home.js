//imports needed for Home Component
import React from "react";
import { auth } from "../services/firebase";

// Home page  (Only visible when user is signed in and authenticated)

console.log();
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Home;
