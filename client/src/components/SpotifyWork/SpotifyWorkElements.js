/* Styled Components needed for the SpotifyWork Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const SpotifyWorkWrapper = styled.div`
  padding: 1rem;
`;

export const SpotifyWorkButton = styled.button`
  background-color: #2d333b;
  color: #5cdb95;
  padding: 0.3rem;
  outline: none;
  font-family: "Noto Sans JP";
  font-weight: bold;
  font-size: 0.91rem;
  border-radius: 1.3rem;
  border: 0.2rem solid #373e47;

  &:hover {
    background-color: #5cdb95;
    color: #22272e;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const SpotifyWorkMainWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 1rem;
`;

export const SpotifyWorkMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
export const SpotifyLogo = styled.img`
  width: 4rem;

  @media only screen and (max-width: 500px) {
    width: 2.7rem;
  }
`;

export const SpotifyWorkUserText = styled.p`
  color: #cdd9e5;
  font-size: 1.2rem;

  @media only screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const SpotifyWorkPlaylistText = styled.p`
  color: #5cdb95;
  font-weight: bold;
  font-size: 1.6rem;

  @media only screen and (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
