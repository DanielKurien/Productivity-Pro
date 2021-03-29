import React, { useEffect, useContext } from "react";
import useAuthSpotify from "../../services/useAuthSpotify";
import SpotifyWebApi from "spotify-web-api-node";
import { ChillContext } from "../../context/ChillContext";
import SpotifyChill from "../../components/SpotifyChill/SpotifyChill";
import SpotifyWork from "../../components/SpotifyWork/SpotifyWork";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});
const Dashboard = ({ code }) => {
  const accessToken = useAuthSpotify(code);
  const { chill } = useContext(ChillContext);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <div>
      {chill ? <SpotifyChill /> : <SpotifyWork accessToken={accessToken} />}
    </div>
  );
};

export default Dashboard;