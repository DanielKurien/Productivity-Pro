//imports for Root Component
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { RootWrapper } from "./RootElements";

//Component for Root Route when user just visits site (not logged in)
const Root = () => {
  return (
    <RootWrapper>
      <Navbar />
    </RootWrapper>
  );
};

export default Root;
