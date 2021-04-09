/* This component takes care of all the functionality when it
  comes to playing a song in the Chill Playlist.
  When a user clicks on a song to play, the component organizes the 
  song urls in the correct order so the correct song will be played and the song
  after it in the playlist will be played next.
*/

import React, { useContext, useState, useEffect } from "react";
import { SpotifyChillContext } from "../../context/SpotifyChillContext";

import SpotifyWebPlayer from "react-spotify-web-playback";
import SongItem from "../../components/SongItem/SongItem";
import {
  SongItemsWrapper,
  ChillPlayerWrapper,
  SongMainWrapper,
  SpotifyChillMainWrapper,
  SpotifyChillPlayerWrapper,
} from "./SpotifyChillPlayElements";

const SpotifyChillPlay = ({ accessToken }) => {
  const { chillPlaylistSongs } = useContext(SpotifyChillContext);
  const [customSongsUris, setCustomSongsUris] = useState(null);
  const [songsUris, setSongsUris] = useState(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!chillPlaylistSongs) return;
    setSongsUris(
      chillPlaylistSongs.map((song) => {
        return song.uri;
      })
    );
  }, [chillPlaylistSongs]);

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
    <SpotifyChillPlayerWrapper>
      <SpotifyChillMainWrapper>
        <SongMainWrapper>
          <SongItemsWrapper>
            {chillPlaylistSongs.map((result) => (
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
        <ChillPlayerWrapper>
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
        </ChillPlayerWrapper>
      </SpotifyChillMainWrapper>
    </SpotifyChillPlayerWrapper>
  );
};

export default SpotifyChillPlay;
