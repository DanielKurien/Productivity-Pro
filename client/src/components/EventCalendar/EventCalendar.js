/*File takes in the FullCalendar component and styles the whole calendar appropriately
  with the main 'CalendarWrapper' div. Also takes in the todos and 
  displays each one in that has a date on the Calendar
*/

import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./EventCalendar";
import { TodosContext } from "../../context/TodosContext";
import { CalendarWrapper, EventCalendarWrapper } from "./EventCalendarElements";

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
