/* Simple navigation bar on top of screen, when user logs in the App. Using
  Firebase Authentication, will logout user when they click a sign out button.
*/

import React from "react";
import { auth } from "../../services/firebase";
import { HomeNavWrapper, HomeNavBtn, HomeNavHeading } from "./HomeNavElements";
const HomeNav = () => {
  return (
    <HomeNavWrapper>
      <HomeNavHeading>Home</HomeNavHeading>
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
