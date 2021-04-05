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
