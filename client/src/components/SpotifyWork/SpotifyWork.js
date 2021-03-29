import React, { useState, useEffect } from "react";
import useAuthSpotify from "../../services/useAuthSpotify";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyWorkSearch from "../../components/SpotifyWorkSearch/SpotifyWorkSearch";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyWork = ({ accessToken }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <>
      <h1>Hello world</h1>
      <SpotifyWorkSearch accessToken={accessToken} />
    </>
  );
};

export default SpotifyWork;
