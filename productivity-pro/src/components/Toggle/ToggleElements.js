import styled from "styled-components";

export const InputWrapper = styled.label``;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: #482ff7;

    &:before {
      left: 27px;
    }
  }
`;

export const Slider = styled.span`
    display:flex;
    cursor:pointer;
    width:3rem;
    height:1.5rem;
    border:1px solid white;
    border-radius:6rem;
    background-color:#ee5a5a;
    position:relative;
    transition:background-color:0.2s;

    &:before{
        content: "";
        position:absolute;
        top:0.125rem;
        left:0.125rem;
        width:1.25rem;
        height:1.25rem;
        border-radius:3.75rem;
        transition:0.2s;
        background:#fff;
        box-shadow:0 2px 4px 0 rgba(0,35,11,0.2);
    }

`;
