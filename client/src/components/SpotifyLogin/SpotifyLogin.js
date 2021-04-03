import React from "react";
import { SpotifyLink, SpotifyLinkWrapper } from "./SpotifyLoginElements";

const SpotifyLogin = () => {
  const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=https://productivitypro.netlify.app/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify%20playlist-modify-private`;

  return (
    <SpotifyLinkWrapper>
      <SpotifyLink href={AUTH_URL}>LOGIN WITH SPOTIFY</SpotifyLink>{" "}
    </SpotifyLinkWrapper>
  );
};

export default SpotifyLogin;
