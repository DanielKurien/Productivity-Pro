/* Styled Components needed for the EventCalendar Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const CalendarWrapper = styled.div`
  flex: 1;
  background-color: #2d333b;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  @media only screen and (max-width: 900px) {
    flex: 1.4;
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
  }
`;
export const EventCalendarWrapper = styled.div`

  .fc-event-title-container{
    background-color:#373e47;

  }
  .fc-col-header-cell-cushion{
    color:#cdd9e5;
    font-family:"Noto Sans JP", sans-serif;
    font-size:0.9rem;
  }
  
  .fc-daygrid-block-event{
    background-color:#373e47;
    border:1px solid white;
    color:#cdd9e5;
    font-size:0.7rem;
    font-family:"Noto Sans JP", sans-serif;
  }
 
  .fc-scrollgrid-sync-inner {
    background-color:#2d333b;
  }
  
  fc-media-screen{
    height:90%;
  }
  .fc-scrollgrid{
    border-radius:0.2rem;
    border:0.13rem solid white;

  }
  }.fc-button {
    background-color: #373e47;
    border-radius: 0.3rem;
    font-family: "Noto Sans JP", sans-serif;
    text-transform: capitalize;
    font-size:0.8rem;
  }

  .fc-toolbar-title {
    font-family: "Dosis";
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #5cdb95;
    font-size:1.3rem;
    @media only screen and (max-width: 1300px) {
      font-size: 1rem;
    }
  }
  .fc-daygrid-day-number {
    font-size: 0.9rem;
    color: #cdd9e5;
    font-family: "Noto Sans JP", sans-serif;
  }
  .fc {
    box-sizing: border-box;
    border: 0.2rem solid #373e47;
    border-radius: 1rem;
    background-color: #22272e;
    height:55vh;
    padding:1rem;
    
    @media only screen and (max-width: 900px) {
      height:60vh;
    }

    @media only screen and (max-width: 600px) {
      height:55vh;
    }
  }
`;
