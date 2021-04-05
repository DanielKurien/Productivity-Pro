import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyChillPlay from "../../components/SpotifyChillPlay/SpotifyChillPlay";
import SpotifyChillSearch from "../../components/SpotifyChillSearch/SpotifyChillSearch";
import { SpotifyChillContext } from "../../context/SpotifyChillContext";
import {
  SpotifyChillWrapper,
  SpotifyChillButton,
  SpotifyChillMainWrapper,
  SpotifyChillUserText,
  SpotifyLogo,
  SpotifyChillPlaylistText,
  SpotifyChillMiddleWrapper,
} from "./SpotifyChillElements";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyChill = ({ accessToken }) => {
  const [chillPlaylist, setChillPlaylist] = useState({});
  const [chillPlaylistSongs, setChillPlaylistSongs] = useState([]);
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
            (playlist) => playlist.name === "Productivity Pro Chill"
          );
          if (playlist) {
            setChillPlaylist(playlist);
          } else {
            spotifyApi
              .createPlaylist("Productivity Pro Chill", {
                description: "Productivity Pro Chill Playlist",
                public: true,
              })
              .then((data) => {
                setChillPlaylist(data.body);
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
    if (!chillPlaylist || !accessToken || !chillPlaylist.id) return;

    spotifyApi
      .getPlaylistTracks(chillPlaylist.id)
      .then((data) => {
        setChillPlaylistSongs(
          data.body.items.map((song) => {
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
  }, [chillPlaylist, accessToken]);

  const buttonChange = () => {
    if (buttonToggle === "Play Songs") {
      setButtonToggle("Add Songs");
    } else {
      setButtonToggle("Play Songs");
    }
  };

  return (
    <SpotifyChillWrapper>
      <SpotifyChillMainWrapper>
        <SpotifyLogo
          src="https://i.pinimg.com/originals/0a/10/de/0a10de0640cbcfcd9cf0ac742b90bb30.png"
          alt=""
        />
        <SpotifyChillMiddleWrapper>
          <SpotifyChillUserText>
            {spotifyUser.display_name}
          </SpotifyChillUserText>
          <SpotifyChillPlaylistText>Chill Playlist</SpotifyChillPlaylistText>
        </SpotifyChillMiddleWrapper>
        <SpotifyChillButton onClick={buttonChange}>
          {buttonToggle}
        </SpotifyChillButton>
      </SpotifyChillMainWrapper>
      <SpotifyChillContext.Provider
        value={{
          chillPlaylist,
          setChillPlaylist,
          chillPlaylistSongs,
          setChillPlaylistSongs,
        }}
      >
        {buttonToggle === "Play Songs" ? (
          <SpotifyChillPlay accessToken={accessToken} />
        ) : (
          <SpotifyChillSearch accessToken={accessToken} />
        )}
      </SpotifyChillContext.Provider>
    </SpotifyChillWrapper>
  );
};

export default SpotifyChill;
