import styled from "styled-components";

export const SearchMainWrapper = styled.div`
  display: flex;
`;
export const SearchTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddSongButton = styled.button`
  display: none;
`;

export const SearchItemWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  color: white;
  border: 0.2rem solid #373e47;
  background-color: #2d333b;
  justify-content: space-between;

  &:hover ${AddSongButton} {
    display: flex;
  }
`;

export const SearchItemArtist = styled.p``;

export const SearchItemSong = styled.p``;

export const AlbumImage = styled.img``;
