/* SpotifyWorkSearch component to handle searching using the Spotify Api.
  Component allows user to add songs to the Work Productivity Pro Playlist.
*/

import React, { useState, useEffect, useContext } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { SpotifyWorkContext } from "../../context/SpotifyWorkContext";

import SearchItem from "../../components/SearchItem/SearchItem";
import {
  WorkSearchInput,
  WorkSearchWrapper,
  SearchResultsWrapper,
  SearchResultsMainWrapper,
} from "./SpotifyWorkSearchElements";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
});

const SpotifyWorkSearch = ({ accessToken }) => {
  const { workPlaylist, setWorkPlaylistSongs } = useContext(SpotifyWorkContext);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addSong = async (trackUri) => {
    const track = [];
    track.push(trackUri);
    try {
      await spotifyApi.addTracksToPlaylist(workPlaylist.id, track);
      const updatedSongs = await (
        await spotifyApi.getPlaylistTracks(workPlaylist.id)
      ).body.items;
      setWorkPlaylistSongs(
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
    <WorkSearchWrapper>
      <WorkSearchInput
        type="text"
        value={search}
        placeholder="Search for song to add to Work Playlist"
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
    </WorkSearchWrapper>
  );
};

export default SpotifyWorkSearch;
