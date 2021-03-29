import styled from "styled-components";

export const StatTrackerWrapper = styled.div`
  background-color: #22272e;
  border: 0.2rem solid #373e47;
  border-radius: 1rem;
  flex: 1.4;

  @media only screen and (max-width: 940px) {
    flex: 1;
  }
  @media only screen and (max-width: 750px) {
    flex: 1.3;
  }
`;

export const StatMainWrapper = styled.div``;

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
