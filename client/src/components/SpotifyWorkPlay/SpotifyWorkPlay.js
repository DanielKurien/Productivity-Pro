import React, { useContext } from "react";
import { SpotifyWorkContext } from "../../context/SpotifyWorkContext";
import SpotifyWebPlayer from "react-spotify-web-playback";

const SpotifyWorkPlay = ({ accessToken }) => {
  const { workPlaylist, workPlaylistSongs } = useContext(SpotifyWorkContext);
  console.log(workPlaylistSongs);
  console.log(accessToken);
  return (
    <div>
      <h1>Hello</h1>
      <SpotifyWebPlayer
        token={accessToken}
        uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
      />
    </div>
  );
};

export default SpotifyWorkPlay;
