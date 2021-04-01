import styled from "styled-components";

export const SongMainWrapper = styled.div`
  display: flex;
`;
export const SongTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddSongButton = styled.button`
  display: none;
`;

export const SongItemWrapper = styled.div`
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

export const SongItemArtist = styled.p``;

export const SongItemSong = styled.p``;

export const AlbumImage = styled.img``;
