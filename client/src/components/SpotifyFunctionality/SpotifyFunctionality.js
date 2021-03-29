import React from "react";
import {
  SpotifyFunctionalityWrapper,
  SpotifyMainWrapper,
} from "./SpotifyFunctionalityElements";

import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import Dashboard from "../Dashboard/Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

const SpotifyFunctionality = () => {
  return (
    <SpotifyFunctionalityWrapper>
      <SpotifyMainWrapper>
        {code ? <Dashboard code={code} /> : <SpotifyLogin />}
      </SpotifyMainWrapper>
    </SpotifyFunctionalityWrapper>
  );
};

export default SpotifyFunctionality;
