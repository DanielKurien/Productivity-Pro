/* Individual search item component, that is rendered for each search result when 
user searches for a song to add to one of their spotify playlists
Takes in the title, album,artist and onClick function to add the song to playlists
and style all information in the item container
  */
import React from "react";
import {
  SearchItemWrapper,
  AlbumImage,
  SearchItemArtist,
  SearchItemSong,
  SearchTextWrapper,
  AddSongButton,
  SearchMainWrapper,
  ButtonWrapper,
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
      <ButtonWrapper>
        <AddSongButton onClick={onClick}>Add Song</AddSongButton>
      </ButtonWrapper>
    </SearchItemWrapper>
  );
};

export default SearchItem;
