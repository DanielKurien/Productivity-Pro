import React, { useState, useEffect } from "react";
import useAuthSpotify from "../../services/useAuthSpotify";
import SpotifyWebApi from "spotify-web-api-node";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyWorkSearch = ({ accessToken }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
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
      <input
        type="text"
        value={search}
        placeholder="Search for song to add to Work Playlist"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SpotifyWorkSearch;
