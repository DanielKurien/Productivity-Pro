/* Styled Components needed for the SpotifyChill Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const SpotifyChillWrapper = styled.div`
  padding: 1rem;
`;

export const SpotifyChillButton = styled.button`
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
`;

export const SpotifyChillMainWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 1rem;
`;

export const SpotifyChillMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
export const SpotifyLogo = styled.img`
  width: 4rem;
`;

export const SpotifyChillUserText = styled.p`
  color: #cdd9e5;
  font-size: 1.2rem;
`;

export const SpotifyChillPlaylistText = styled.p`
  color: #5cdb95;
  font-weight: bold;
  font-size: 1.8rem;
`;
