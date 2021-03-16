import React from "react";
import { loginUrl } from "../../services/spotify";
const SpotifyLogin = () => {
  return (
    <div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default SpotifyLogin;
