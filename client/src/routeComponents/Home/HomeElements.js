import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0;
  max-width: 100vw;
  height: 100vh;
  background-color: #2d333b;
  overflow-x: hidden;
  @media only screen and (max-width: 1050px) {
    height: 150vh;
  }

  @media only screen and (max-width: 600px) {
    height: 200vh;
  }
  @media only screen and (max-width: 600px) {
    height: 250vh;
  }
`;

export const HomeFlexbox = styled.div`
  height: 95vh;

  display: flex;
  @media only screen and (max-width: 1050px) {
    height: 145vh;
    flex-direction: column;
  }
  @media only screen and (max-width: 900px) {
    height: 195vh;
  }

  @media only screen and (max-width: 600px) {
    height: 245vh;
  }
`;

export const HomeLeft = styled.div`
  height: 100%;
  flex: 1.7;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const HomeLeftColumn = styled.div`
  flex: 1.3;
  @media only screen and (max-width: 600px) {
    flex: 1.6;
  }
`;
export const HomeRight = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1050px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 900px) {
    flex: 2;
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    flex: 1;
    flex-direction: column;
  }
`;
