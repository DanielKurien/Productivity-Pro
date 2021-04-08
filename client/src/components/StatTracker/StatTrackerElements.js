import styled from "styled-components";

export const StatTrackerWrapper = styled.div`
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans JP";
  display: flex;
  box-sizing: border-box;
  color: white;
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
  background-color: #2d333b;
  align-items: center;
  font-size: 1.3rem;
  display: flex;
  border-radius: 0.8rem;
  padding: 0 0.3rem 0rem 0.4rem;
  border: 0.1rem solid white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;

export const StatText = styled.h1`
  font-family: "Dosis";
  color: #5cdb95;
  text-transform: uppercase;
  background-color: #373e47;
  font-size: 1.3rem;
  display: flex;
`;

export const AddFriendForm = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: #2d333b;
  height: 100%;
  outline: none;
  box-sizing: border-box;
  border: none;
`;
export const AddFriendInput = styled.input`
  background-color: #2d333b;
  font-family: "Noto Sans JP";
  color: #5cdb95;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const AddFriendButton = styled.button`
  background-color: #2d333b;
  color: white;
  font-size: 0.8rem;
  border-radius: 0.7rem;
  padding: 0.1rem 1.1rem;
  border: 0.22rem solid #5cdb95;
`;

export const StatTrackerTable = styled.table`
  box-sizing: border-box;
  border: 0.06rem solid #5cdb95;
  border-collapse: collapse;
  width: 100%;
  border-bottom-left-radius: 2rem;
`;

export const StatTableHeading = styled.th`
  padding: 0.1rem 1rem;
  background-color: #2d333b;
  border: 0.06rem solid #5cdb95;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
`;

export const StatTableRow = styled.tr``;

export const StatTableItem = styled.td`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  text-align: center;
  color: #808080;
  font-weight: bolder;
`;

export const StatTableHead = styled.thead``;
export const StatTableBody = styled.tbody`
  border: 0.06rem solid #5cdb95;
`;
