import styled from "styled-components";

export const StatTrackerWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #2d333b;
  flex: 1.4;

  @media only screen and (max-width: 940px) {
    flex: 1;
  }
`;

export const StatMainWrapper = styled.div`
  background-color: #22272e;
  box-sizing: border-box;
  border: 0.2rem solid #373e47;
  border-radius: 1rem;
  background-color: #22272e;
  padding: 1rem;
  width: 98%;
  height: 97%;
`;

export const StatHeading = styled.div`
  font-family: "Dosis";
  color: #5cdb95;
  text-transform: uppercase;
  background-color: #373e47;
  font-size: 1.3rem;
  display: flex;
  border-radius: 0.8rem;
  padding: 0 0.4rem;
  border: 0.1rem solid white;
`;

export const StatText = styled.h1`
  font-family: "Dosis";
  color: #5cdb95;
  text-transform: uppercase;
  background-color: #373e47;
  font-size: 1.3rem;
  display: flex;
`;

export const AddFriendForm = styled.form``;
export const AddFriendInput = styled.input``;
export const AddFriendButton = styled.button``;

export const StatTrackerTable = styled.table``;

export const StatTableHeading = styled.th``;

export const StatTableRow = styled.tr``;

export const StatTableItem = styled.table``;
