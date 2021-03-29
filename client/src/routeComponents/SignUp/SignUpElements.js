import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

export const SignUpWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d333b;
  color: white;

  @media only screen and (max-width: 550px) {
    background-color: #22272e;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  background-color: #22272e;
  border: 0.2rem solid #373e47;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  height: 30vh;
  padding: 3rem;
  flex-direction: column;

  @media only screen and (max-width: 550px) {
    height: 15vh;
    width: 40vh;
    border: none;
  }

  @media only screen and (max-width: 550px) {
    width: 30vh;
  }

  @media only screen and (max-width: 430px) {
    width: 20vh;
  }
`;

export const SignUpHeading = styled.h1`
  font-family: "Dosis", sans-serif;
  color: #5cdb95;
  font-size: 1.5rem;
  background-color: #22272e;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: none;
  border-bottom: 2px solid white;
  padding: 0rem;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 430px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 325px) {
    font-size: 1.3rem;
  }
`;

export const SignUpEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  max-width: 100vh;
  font-size: 2rem;
`;

export const SignUpPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  max-width: 100vh;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SignUpInput = styled.input`
  background-color: #22272e;
  color: #5cdb95;
  border: none;
  font-family: "Noto Sans JP", sans-serif;
  outline: none;
  height: 2rem;
  font-size: 1.5rem;
  padding: 0.6rem 1rem;

  @media only screen and (max-width: 430px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const SignUpEmailIcon = styled(AiOutlineMail)`
  color: #5cdb95;
  font-size: 1.6rem;
`;

export const SignUpPasswordIcon = styled(RiLockPasswordFill)`
  color: #5cdb95;
  font-size: 1.6rem;
`;

export const SignUpButton = styled.button`
  background-color: #5cdb95;
  border-radius: 25px;
  border: white;
  color: #22272e;
  font-family: "Noto Sans JP", sans-serif;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;

  &:hover {
    background-color: #22272e;
    color: #5cdb95;
    border: 1px solid white;
  }

  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;
