import React, { useEffect, useState } from "react";
import { SpotifyFunctionalityWrapper } from "./SpotifyFunctionalityElements";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import { getTokenFromUrl } from "../../services/spotify";
const SpotifyFunctionality = () => {
  const spotifyApi = new SpotifyWebApi();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const spotifyPlaylistFeatures = {
    name: "Work Productivity Pro",
  };
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);
      spotifyApi
        .getMe()
        .then((response) => {
          setUser(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, []);

  const handleCreatePlaylist = () => {
    spotifyApi
      .createPlaylist(user.id, spotifyPlaylistFeatures)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <SpotifyFunctionalityWrapper>
      {" "}
      {token ? (
        <div>
          <SpotifyPlayer
            token={token}
            uris={["spotify:playlist:37i9dQZF1ELY4XyzR51RrI"]}
          />

          <button onClick={handleCreatePlaylist}>Create Playlist</button>
        </div>
      ) : (
        <SpotifyLogin />
      )}
    </SpotifyFunctionalityWrapper>
  );
};

export default SpotifyFunctionality;
