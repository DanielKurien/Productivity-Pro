import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./EventCalendar";
import { TodosContext } from "../TodosContext";
import styled from "styled-components";

const EventCalendarWrapper = styled.div`
  .fc {
    display: flex;
    border-color: green;
    background-color: red;
  }
`;
const EventCalendar = () => {
  const { todos } = useContext(TodosContext);
  return (
    <EventCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[...todos]}
      />
      ;
    </EventCalendarWrapper>
  );
};

export default EventCalendar;
