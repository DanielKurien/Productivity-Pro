/* Styled Components needed for the TodoSection Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const TodoSectionWrapper = styled.div`
  background-color: #2d333b;
  padding: 0.5rem;
  justify-content: center;
  flex: 1;
`;

export const TodoMainWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  background-color: #22272e;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0.2rem solid #373e47;

  @media only screen and (max-width: 1050px) {
    max-height: 85vh;
  }

  @media only screen and (max-width: 599px) {
    max-height: 100%;
  }
`;

export const TodoItemsWrapper = styled.div`
  height: 65%;
  max-height: 65%;
  overflow-y: auto;

  @media only screen and (max-width: 1050px) {
    max-height: 63vh;
  }

  @media only screen and (max-width: 599px) {
    max-height: 20vh;
  }
`;
