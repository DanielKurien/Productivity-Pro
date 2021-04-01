import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyWorkPlay from "../../components/SpotifyWorkPlay/SpotifyWorkPlay";
import SpotifyWorkSearch from "../../components/SpotifyWorkSearch/SpotifyWorkSearch";
import { SpotifyWorkContext } from "../../context/SpotifyWorkContext";
import {
  SpotifyWorkWrapper,
  SpotifyWorkButton,
  SpotifyWorkMainWrapper,
  SpotifyWorkUserText,
  SpotifyLogo,
  SpotifyWorkPlaylistText,
  SpotifyWorkMiddleWrapper,
} from "./SpotifyWorkElements";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyWork = ({ accessToken }) => {
  const [workPlaylist, setWorkPlaylist] = useState({});
  const [workPlaylistSongs, setWorkPlaylistSongs] = useState([]);
  const [spotifyUser, setSpotifyUser] = useState({});
  const [buttonToggle, setButtonToggle] = useState("Play Songs");
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi
      .getMe()
      .then((data) => {
        setSpotifyUser(data.body);
        spotifyApi.getUserPlaylists(data.body.id).then((data) => {
          let playlist = data.body.items.find(
            (playlist) => playlist.name === "Productivity Pro Work"
          );
          if (playlist) {
            setWorkPlaylist(playlist);
          } else {
            spotifyApi
              .createPlaylist("Productivity Pro Work", {
                description: "Productivity Pro Work Playlist",
                public: true,
              })
              .then((data) => {
                setWorkPlaylist(data.body);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  useEffect(() => {
    if (!workPlaylist) return;
    spotifyApi
      .getPlaylistTracks(workPlaylist.id)
      .then((data) => {
        setWorkPlaylistSongs(
          data.body.items.map((song) => {
            console.log(song);
            return {
              artist: song.track.album.artists[0].name,
              title: song.track.name,
              uri: song.track.uri,
              albumUrl: song.track.album.images[2].url,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [workPlaylist]);

  const buttonChange = () => {
    if (buttonToggle === "Play Songs") {
      setButtonToggle("Add Songs");
    } else {
      setButtonToggle("Play Songs");
    }
  };

  return (
    <SpotifyWorkWrapper>
      <SpotifyWorkMainWrapper>
        <SpotifyLogo
          src="https://i.pinimg.com/originals/0a/10/de/0a10de0640cbcfcd9cf0ac742b90bb30.png"
          alt=""
        />
        <SpotifyWorkMiddleWrapper>
          <SpotifyWorkUserText>{spotifyUser.display_name}</SpotifyWorkUserText>
          <SpotifyWorkPlaylistText>Work Playlist</SpotifyWorkPlaylistText>
        </SpotifyWorkMiddleWrapper>
        <SpotifyWorkButton onClick={buttonChange}>
          {buttonToggle}
        </SpotifyWorkButton>
      </SpotifyWorkMainWrapper>
      <SpotifyWorkContext.Provider
        value={{
          workPlaylist,
          setWorkPlaylist,
          workPlaylistSongs,
          setWorkPlaylistSongs,
        }}
      >
        {buttonToggle === "Play Songs" ? (
          <SpotifyWorkPlay accessToken={accessToken} />
        ) : (
          <SpotifyWorkSearch accessToken={accessToken} />
        )}
      </SpotifyWorkContext.Provider>
    </SpotifyWorkWrapper>
  );
};

export default SpotifyWork;
