import React, { useEffect, useState } from "react";
import {
  SpotifyFunctionalityWrapper,
  SpotifyMainWrapper,
} from "./SpotifyFunctionalityElements";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";

const SpotifyFunctionality = () => {
  return (
    <SpotifyFunctionalityWrapper>
      <SpotifyMainWrapper>
        <SpotifyLogin />
      </SpotifyMainWrapper>
    </SpotifyFunctionalityWrapper>
  );
};

export default SpotifyFunctionality;
