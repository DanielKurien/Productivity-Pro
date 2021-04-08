import styled from "styled-components";
import DatePicker from "react-date-picker";
export const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TodoHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoFormHeading = styled.h2`
  font-family: "Dosis";
  left: 50%;
  text-transform: uppercase;
  color: #5cdb95;
  font-size: 1.3rem;
`;

export const TodoFormInput = styled.input`
  background-color: #2d333b;
  box-sizing: border-box;
  padding: 0.1rem 1rem;
  border: 0.2rem solid #373e47;
  border-radius: 1rem;
  outline: none;
  margin: 1rem 0rem 0.5rem 0rem;
  font-size: 1rem;
  font-family: "Noto Sans JP";
  color: white;
`;

export const TodoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const TodoButton = styled.button`
  width: 8rem;
  padding: 0.2rem 0.2rem;
  font-family: "Noto Sans JP";
  background-color: #22272e;
  color: #5cdb95;
  border: 0.2rem solid #373e47;
  border-radius: 1rem;
  font-weight: bolder;

  &:hover {
    color: #22272e;
    background-color: #5cdb95;
  }
`;

export const DateSelector = styled(DatePicker)`
  .react-date-picker__wrapper {
    background-color: #2d333b;
    box-sizing: border-box;
    padding: 0.1rem 1rem;
    border: 0.2rem solid #373e47;
    border-radius: 1rem;
    margin: 0.1rem 0rem 0.5rem 0rem;
  }

  .react-date-picker__inputGroup__input {
    color: #5cdb95;
    outline: none;
    font-family: "Noto Sans JP";
  }

  .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
    stroke: #5cdb95;
  }

  .react-date-picker__button__icon {
    color: white;
    outline: none;
  }
  .react-calendar {
    background-color: #22272e;
    border-radius: 0.1rem;
    border: 0.1rem solid #373e47;
  }
  .react-calendar__tile {
    color: white;
  }

  .react-calendar__month-view__days__day {
    color: white;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: #5cdb95;
  }

  .react-date-picker__calendar-button {
    outline: none;
  }

  .react-calendar__navigation__label {
    color: white;
    font-family: "Noto Sans JP";

    &:hover {
      color: black;
    }
  }

  .react-date-picker__inputGroup {
    font-family: "Noto Sans JP";
    outline: none;
    color: white;
  }
`;
