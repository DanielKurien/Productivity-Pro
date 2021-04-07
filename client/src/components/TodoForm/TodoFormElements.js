import styled from "styled-components";
import DatePicker from "react-date-picker"
export const TodoFormWrapper = styled.form`
    display:flex;
    flex-direction:column;
`;

export const TodoFormInput = styled.input``;

export const TodoButton = styled.button``;


export const DateSelector = styled(DatePicker)`
    .react-date-picker__wrapper{
        background-color: #2d333b;
    }

    .react-date-picker__button__icon{
        color:white;
    }
    .react-calendar{
        background-color: #22272e;
        border-radius: 0.1rem;
        border: 0.1rem solid #373e47;
    }
    .react-calendar__tile{
        color:white;
    }

    .react-calendar__month-view__days__day{
        color:white;
    }

    .react-calendar__month-view__weekdays__weekday{
        color:#5cdb95;
    }

    .react-date-picker__calendar-button{
        outline:none;
    }

    .react-calendar__navigation__label{
        color:white;
        font-family:"Noto Sans JP";

        &:hover{
            color:black;
        }
    }

    .react-date-picker__inputGroup{
        font-family:"Noto Sans JP";
        outline:none;
    }
` 