import React, { useContext, useState, useEffect } from "react";
import { SpotifyWorkContext } from "../../context/SpotifyWorkContext";
import { WorkPlayerWrapper } from "./SpotifyWorkPlayElements";
import SpotifyWebPlayer from "react-spotify-web-playback";
import SongItem from "../../components/SongItem/SongItem";
import { SongItemsWrapper } from "./SpotifyWorkPlayElements";

const SpotifyWorkPlay = ({ accessToken }) => {
  const { workPlaylistSongs } = useContext(SpotifyWorkContext);
  const [songsUris, setSongsUris] = useState([]);

  useEffect(() => {
    if (!workPlaylistSongs) return;
    setSongsUris(
      workPlaylistSongs.map((song) => {
        return song.uri;
      })
    );
  }, [workPlaylistSongs]);

  return (
    <div>
      <h1>Hello</h1>
      <SongItemsWrapper>
        {workPlaylistSongs.map((result) => (
          <SongItem
            key={result.uri}
            title={result.title}
            uri={result.uri}
            artist={result.artist}
            album={result.albumUrl}
          />
        ))}
      </SongItemsWrapper>
      <WorkPlayerWrapper>
        {accessToken && songsUris ? (
          <SpotifyWebPlayer token={accessToken} uris={songsUris} />
        ) : (
          ""
        )}
      </WorkPlayerWrapper>
    </div>
  );
};

export default SpotifyWorkPlay;
