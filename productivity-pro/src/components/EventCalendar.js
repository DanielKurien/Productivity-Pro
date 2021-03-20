import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./EventCalendar";
import { TodosContext } from ".././context/TodosContext";
import styled from "styled-components";

const EventCalendarWrapper = styled.div`
  .fc {
    border-color: green;
    background-color: pink;
    height: 100%;
    flex: 1.5;
  }
`;
const EventCalendar = () => {
  const { todos } = useContext(TodosContext);
  return (
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
  );
};

export default EventCalendar;
