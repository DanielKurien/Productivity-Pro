import React from "react";
import { auth } from "../../services/firebase";
import { HomeNavWrapper, HomeNavBtn, HomeNavHeader } from "./HomeNavElements";
const HomeNav = () => {
  return (
    <HomeNavWrapper>
      <HomeNavHeader>Home</HomeNavHeader>
      <HomeNavBtn
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </HomeNavBtn>
    </HomeNavWrapper>
  );
};

export default HomeNav;
