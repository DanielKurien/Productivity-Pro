/* Individual Song Item component, that is rendered for each song
in one of the two playlist that the user is currently looks at it.
When user clicks button in component, song is played
*/

import React from "react";
import {
  SongItemWrapper,
  AlbumImage,
  SongItemArtist,
  SongItemSong,
  SongTextWrapper,
  AddSongButton,
  ButtonWrapper,
  SongMainWrapper,
} from "./SongItemElements";
const SongItem = ({ title, album, artist, onClick }) => {
  return (
    <SongItemWrapper>
      <SongMainWrapper>
        <AlbumImage src={album} alt="" />
        <SongTextWrapper>
          <SongItemArtist>{artist}</SongItemArtist>
          <SongItemSong>{title}</SongItemSong>
        </SongTextWrapper>
      </SongMainWrapper>
      <ButtonWrapper>
        <AddSongButton onClick={onClick}>Play Song</AddSongButton>
      </ButtonWrapper>
    </SongItemWrapper>
  );
};

export default SongItem;
