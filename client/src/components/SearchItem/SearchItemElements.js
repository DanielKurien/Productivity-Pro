/* Styled Components needed for the SearchItem Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const SearchMainWrapper = styled.div`
  display: flex;
  max-width: 100%;
`;
export const SearchTextWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: 0.4rem;
  justify-content: space-evenly;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AddSongButton = styled.button`
  background-color: #2d333b;
  color: #5cdb95;
  padding: 0.3rem;
  outline: none;
  font-family: "Noto Sans JP";
  font-size: 0.91rem;
  border-radius: 1.3rem;
  border: 0.2rem solid #373e47;
  height: 2.4rem;
  &:hover {
    background-color: #5cdb95;
    color: #22272e;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.7rem;
    height: 2rem;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 0.91rem;
    height: 2.4rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 0.7rem;
    height: 2rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.5rem;
    height: 1.5rem;
  }
`;

export const SearchItemWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  color: white;
  box-sizing: border-box;
  padding:0.2rem 0rem;
  border-bottom 0.25rem solid #5cdb95;
  background-color: #2d333b;
  justify-content: space-between;
`;

export const SearchItemArtist = styled.p`
  color: #808080;
  font-size: 0.9rem;
  font-weight: bold;

  @media only screen and (max-width: 800px) {
    font-size: 0.7rem;
  }
`;

export const SearchItemSong = styled.p`
  @media only screen and (max-width: 800px) {
    font-size: 0.7rem;
  }
`;

export const AlbumImage = styled.img`
  @media only screen and (max-width: 500px) {
    width: 4rem;
    height: 4rem;
  }
`;
