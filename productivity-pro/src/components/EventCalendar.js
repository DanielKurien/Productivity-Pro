import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./EventCalendar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .fc {
    display: flex;
    border-color: green;
    background-color: red;
  }
`;
const EventCalendar = ({ todos }) => {
  return (
    <StyledWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[...todos]}
      />
      ;
    </StyledWrapper>
  );
};

export default EventCalendar;
