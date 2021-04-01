import React from "react";
import {
  SongItemWrapper,
  AlbumImage,
  SongItemArtist,
  SongItemSong,
  SongTextWrapper,
  AddSongButton,
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
      <AddSongButton onClick={onClick}>Add Song</AddSongButton>
    </SongItemWrapper>
  );
};

export default SongItem;
