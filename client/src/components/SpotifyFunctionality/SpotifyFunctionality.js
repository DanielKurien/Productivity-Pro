/*Component that renders the SpotifyDashboard if the user is logged 
in to Spotify. Otherwise, renders the Login Component which will allow the user 
to Login to Spotify. Also, if user is logged in component will take code
from login in the URL needed that can be exchanged for a token to make Spotify 
requests.
*/

import React from "react";
import {
  SpotifyFunctionalityWrapper,
  SpotifyMainWrapper,
} from "./SpotifyFunctionalityElements";

import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import SpotifyDashboard from "../SpotifyDashboard/SpotifyDashboard";

const code = new URLSearchParams(window.location.search).get("code");

const SpotifyFunctionality = () => {
  return (
    <SpotifyFunctionalityWrapper>
      <SpotifyMainWrapper>
        {code ? <SpotifyDashboard code={code} /> : <SpotifyLogin />}
      </SpotifyMainWrapper>
    </SpotifyFunctionalityWrapper>
  );
};

export default SpotifyFunctionality;
