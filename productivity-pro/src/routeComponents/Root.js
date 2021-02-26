//imports for Root Component
import React from "react";
import Navbar from "../components/Navbar";

//Component for Root Route when user just visits site (not logged in)
const Root = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Root;
