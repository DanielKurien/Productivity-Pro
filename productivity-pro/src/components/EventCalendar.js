import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./EventCalendar";
import { TodosContext } from ".././context/TodosContext";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  max-height: 90%;
  flex: 2.8;
`;
const EventCalendarWrapper = styled.div`
  .fc-button {
    background-color: #525f88;
    border-radius: 0.3rem;
    font-family: "Noto Sans JP", sans-serif;
    text-transform: capitalize;
  }

  .fc-toolbar-title {
    font-family: "Dosis";
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #5cdb95;
  }
  .fc-daygrid-day-number {
    color: #fcdb95;
    font-size: 0.9rem;
    color: #d7dbf1;
    font-family: "Noto Sans JP", sans-serif;
  }
  .fc {
    padding: 0.4rem 0.5rem;
    margin: 0.5rem 0.5rem;
    border: 0.2rem solid #525f88;
    border-radius: 1rem;
    background-color: #364067;
    width: 34rem;
    height: 22rem;
  }
`;
const EventCalendar = () => {
  const { todos } = useContext(TodosContext);
  return (
    <CalendarWrapper>
      <EventCalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridDay"
          events={[...todos]}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridDay,dayGridWeek,dayGridMonth",
          }}
        />
      </EventCalendarWrapper>
    </CalendarWrapper>
  );
};

export default EventCalendar;
