import React from "react";
import {
  SearchItemWrapper,
  AlbumImage,
  SearchItemArtist,
  SearchItemSong,
  SearchTextWrapper,
  AddSongButton,
  SearchMainWrapper,
} from "./SearchItemElements";
const SearchItem = ({ title, album, artist, onClick }) => {
  return (
    <SearchItemWrapper>
      <SearchMainWrapper>
        <AlbumImage src={album} alt="" />
        <SearchTextWrapper>
          <SearchItemArtist>{artist}</SearchItemArtist>
          <SearchItemSong>{title}</SearchItemSong>
        </SearchTextWrapper>
      </SearchMainWrapper>
      <AddSongButton onClick={onClick}>Add Song</AddSongButton>
    </SearchItemWrapper>
  );
};

export default SearchItem;
