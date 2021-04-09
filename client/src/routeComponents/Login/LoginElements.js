import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

export const LoginWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d333b;
  color: white;

  @media only screen and (max-width: 360px) {
    border: none;
    background-color: #22272e;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  background-color: #22272e;
  align-items: center;
  justify-content: space-between;
  border: 0.2rem solid #373e47;
  border-radius: 0.5rem;
  height: 30vh;
  padding: 3rem;
  flex-direction: column;

  @media only screen and (max-width: 540px) {
    width: 50vh;
    height: 25vh;
  }

  @media only screen and (max-width: 430px) {
    width: 40vh;
    height: 23vh;
  }

  @media only screen and (max-width: 360px) {
    border: none;
  }
`;

export const LoginHeading = styled.h1`
  font-family: "Dosis", sans-serif;
  color: #5cdb95;
  font-size: 1.5rem;
  background-color: #22272e;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid white;
  padding: 0rem;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 540px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 430px) {
    font-size: 1.5rem;
  }
`;

export const LoginEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 2rem;
`;

export const LoginPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 540px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 430px) {
    margin-bottom: 0.2rem;
  }
`;

export const LoginInput = styled.input`
  background-color: #22272e;
  color: #5cdb95;
  border: none;
  font-family: "Noto Sans JP", sans-serif;
  outline: none;
  height: 2rem;
  font-size: 1.5rem;
  padding: 0.6rem 1rem;
  @media only screen and (max-width: 540px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 430px) {
    font-size: 1rem;
  }
`;

export const LoginEmailIcon = styled(AiOutlineMail)`
  color: #5cdb95;
  font-size: 1.6rem;

  @media only screen and (max-width: 540px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 430px) {
    font-size: 1.1rem;
  }
`;

export const LoginPasswordIcon = styled(RiLockPasswordFill)`
  color: #5cdb95;
  font-size: 1.6rem;

  @media only screen and (max-width: 540px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 540px) {
    font-size: 1.1rem;
  }
`;

export const LoginButton = styled.button`
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

  @media only screen and (max-width: 540px) {
    font-size: 0.75rem;
  }

  @media only screen and (max-width: 430px) {
    font-size: 0.6rem;
  }
`;
