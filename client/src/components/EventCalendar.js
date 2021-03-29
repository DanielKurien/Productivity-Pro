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
//fc-daygrid-block-event fc-h-event fc-event fc-event-start fc-event-end fc-event-past
const EventCalendarWrapper = styled.div`

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
  
  .fc-scrollgrid{
    border-radius:0.2rem;
    border:0.13rem solid white;
  }
  }.fc-button {
    background-color: #373e47;
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
    font-size: 0.9rem;
    color: #cdd9e5;
    font-family: "Noto Sans JP", sans-serif;
  }
  .fc {
    padding: 0.4rem 0.5rem;
    margin: 0.5rem 0.5rem;
    border: 0.2rem solid #373e47;
    border-radius: 1rem;
    background-color: #22272e;
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
