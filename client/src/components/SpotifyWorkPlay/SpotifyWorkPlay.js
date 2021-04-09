/* SpotifyWorkPlay used for playing songs in Work Productivity Pro Playlist. Renders
a SongItem component for each song. User can click item in playlist to play
song in playlist.
 */

import React, { useContext, useState, useEffect } from "react";
import { SpotifyWorkContext } from "../../context/SpotifyWorkContext";

import SpotifyWebPlayer from "react-spotify-web-playback";
import SongItem from "../../components/SongItem/SongItem";
import {
  SongItemsWrapper,
  WorkPlayerWrapper,
  SongMainWrapper,
  SpotifyWorkMainWrapper,
  SpotifyWorkPlayerWrapper,
} from "./SpotifyWorkPlayElements";

const SpotifyWorkPlay = ({ accessToken }) => {
  const { workPlaylistSongs } = useContext(SpotifyWorkContext);
  const [customSongsUris, setCustomSongsUris] = useState(null);
  const [songsUris, setSongsUris] = useState(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!workPlaylistSongs) return;
    setSongsUris(
      workPlaylistSongs.map((song) => {
        return song.uri;
      })
    );
  }, [workPlaylistSongs]);

  const playSong = (songUri) => {
    setPlay(true);
    const songIndex = songsUris.indexOf(songUri);
    const midArray = songsUris.slice(songIndex + 1, songsUris.length);
    let endArray = songsUris.slice(0, songIndex);
    if (songIndex !== 0) {
      setCustomSongsUris([songsUris[songIndex], ...midArray, ...endArray]);
    } else {
      setCustomSongsUris([songsUris[songIndex], ...midArray]);
    }
  };
  return (
    <SpotifyWorkPlayerWrapper>
      <SpotifyWorkMainWrapper>
        <SongMainWrapper>
          <SongItemsWrapper>
            {workPlaylistSongs.map((result) => (
              <SongItem
                key={result.uri}
                title={result.title}
                play={play}
                uri={result.uri}
                artist={result.artist}
                album={result.albumUrl}
                onClick={() => playSong(result.uri)}
              />
            ))}
          </SongItemsWrapper>
        </SongMainWrapper>
        <WorkPlayerWrapper>
          {accessToken && songsUris !== [] ? (
            <SpotifyWebPlayer
              token={accessToken}
              uris={customSongsUris !== [] ? customSongsUris : [...songsUris]}
              styles={{
                activeColor: "#fff",
                bgColor: "#2d333b",
                color: "#fff",
                loaderColor: "#fff",
                sliderColor: "#000",
                trackArtistColor: "#808080",
                trackNameColor: "#fff",
              }}
            />
          ) : (
            ""
          )}
        </WorkPlayerWrapper>
      </SpotifyWorkMainWrapper>
    </SpotifyWorkPlayerWrapper>
  );
};

export default SpotifyWorkPlay;
