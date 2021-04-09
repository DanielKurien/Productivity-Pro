/* Styled Components needed for the SpotifyWorkPlay Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const SpotifyWorkPlayerWrapper = styled.div`
  max-width: 100%;
  background-color: #2d333b;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 0.2rem solid #373e47;
  box-sizing: border-box;
`;

export const SpotifyWorkMainWrapper = styled.div``;
export const WorkPlayerWrapper = styled.div`
  max-width: 100%;
`;
export const SongMainWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 0.4rem;
  background-color: #2d333b;
`;
export const SongItemsWrapper = styled.div`
  height: 40vh;
  overflow-y: auto;
  max-width: 100%;

  @media only screen and (max-width: 1400px) {
    height: 30vh;
  }

  @media only screen and (max-width: 500px) {
    height: 40vh;
  }
`;
