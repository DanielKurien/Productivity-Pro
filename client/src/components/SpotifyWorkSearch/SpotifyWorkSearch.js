import React, { useState, useEffect, useContext } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { SpotifyWorkContext } from "../../context/SpotifyWorkContext";
import SeachItem from "../../components/SearchItem/SearchItem";
import {
  SearchItemsWrapper,
  WorkSearchInput,
  WorkSearchWrapper,
} from "./SpotifyWorkSearchElements";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyWorkSearch = ({ accessToken }) => {
  const { workPlaylist } = useContext(SpotifyWorkContext);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const addSong = (trackUri) => {
    const track = [];
    track.push(trackUri);
    spotifyApi
      .addTracksToPlaylist(workPlaylist.id, track)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    <WorkSearchWrapper>
      <WorkSearchInput
        type="text"
        value={search}
        placeholder="Search for song to add to Work Playlist"
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchItemsWrapper>
        {searchResults.map((result) => (
          <SeachItem
            key={result.uri}
            title={result.title}
            uri={result.uri}
            artist={result.artist}
            album={result.albumUrl}
            onClick={() => addSong(result.uri)}
          />
        ))}
      </SearchItemsWrapper>
    </WorkSearchWrapper>
  );
};

export default SpotifyWorkSearch;
