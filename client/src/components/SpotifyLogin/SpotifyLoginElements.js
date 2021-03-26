import styled from "styled-components";

export const SpotifyLink = styled.a`
  background-color: #1db954;
  background-color: #2d333b;
  text-decoration: none;
  font-size: 1.2rem;
  color: #5cdb95;
  font-weight: bold;
  font-family: "Dosis";
  border-radius: 2rem;
  border: 0.2rem solid #373e47;
  padding: 0.5rem;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #5cdb95;
    color: white;
  }
`;

export const SpotifyLinkWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
