import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";


export const TodoChangeForm = styled.form``

export const TodoChangeButton = styled.button`
  display:none;
`


export const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  border: 0.2rem solid #373e47;
  height: 4rem;
  box-sizing: border-box;
  background-color: #2d333b;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.2rem 0rem;
`;

export const TodoDisplayWrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const TodoText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-family: "Noto Sans JP";
`;
export const DeleteIcon = styled(BsFillTrashFill)`
  color: #f08080;
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

export const CompletedIcon = styled(ImCheckmark)`
  color: #4863a0;
  font-size: 1.2rem;
`;

export const TodoChangeWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 1rem;
`;
export const TodoInput = styled.input`
  height: 100%;
  outline: none;
  border: none;
  background-color: #2d333b;
  color: white;
  font-size: 1.2rem;
  font-family: "Noto Sans JP";
`;

export const TodoRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;

export const TodoDate = styled.p`
  font-family: "Noto Sans JP";
  color: #5cdb95;
  font-size: 1rem;
`;
