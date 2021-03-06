/* This component takes care of all the functionality when it comes 
to searching for a song to play in the Spotify Chill playlist.
It sends the search info for one item to the SearchItem component, so
that it will be displayed nicely
*/
import React, { useState, useEffect, useContext } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { SpotifyChillContext } from "../../context/SpotifyChillContext";

import SearchItem from "../../components/SearchItem/SearchItem";
import {
  ChillSearchInput,
  ChillSearchWrapper,
  SearchResultsWrapper,
  SearchResultsMainWrapper,
} from "./SpotifyChillSearchElements";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyChillSearch = ({ accessToken }) => {
  const { chillPlaylist, setChillPlaylistSongs } = useContext(
    SpotifyChillContext
  );

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addSong = async (trackUri) => {
    const track = [];
    track.push(trackUri);
    try {
      await spotifyApi.addTracksToPlaylist(chillPlaylist.id, track);
      const updatedSongs = await (
        await spotifyApi.getPlaylistTracks(chillPlaylist.id)
      ).body.items;
      setChillPlaylistSongs(
        updatedSongs.map((song) => {
          return {
            artist: song.track.album.artists[0].name,
            title: song.track.name,
            uri: song.track.uri,
            albumUrl: song.track.album.images[2].url,
          };
        })
      );
    } catch (err) {
      console.log(err);
    }
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
    <ChillSearchWrapper>
      <ChillSearchInput
        type="text"
        value={search}
        placeholder="Search for song to add to Chill Playlist"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        ""
      ) : (
        <SearchResultsWrapper>
          <SearchResultsMainWrapper>
            {searchResults.map((result) => (
              <SearchItem
                key={result.uri}
                title={result.title}
                uri={result.uri}
                artist={result.artist}
                album={result.albumUrl}
                onClick={() => addSong(result.uri)}
              />
            ))}
          </SearchResultsMainWrapper>
        </SearchResultsWrapper>
      )}
    </ChillSearchWrapper>
  );
};

export default SpotifyChillSearch;
