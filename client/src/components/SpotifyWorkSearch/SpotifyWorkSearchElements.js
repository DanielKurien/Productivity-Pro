/* Styled Components needed for the SpotifyWorkSearch Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const WorkSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchResultsWrapper = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  border: 0.2rem solid #373e47;
  box-sizing: border-box;
  background-color: #2d333b;
  color: #5cdb95;
`;

export const SearchResultsMainWrapper = styled.div`
  height: 40vh;
  overflow-y: auto;
  width: 100%;

  @media only screen and (max-width: 1500px) {
    height: 34vh;
  }
`;
export const WorkSearchInput = styled.input`
  width: 100%;
  background-color: #2d333b;
  color: #5cdb95;
  box-sizing: border-box;
  padding: 0.3rem;
  font-family: "Noto Sans JP";
  outline: none;
  font-size: 0.91rem;
  border-radius: 1rem;
  border: 0.2rem solid #373e47;
  margin-bottom: 0.5rem;
`;
