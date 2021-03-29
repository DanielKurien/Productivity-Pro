import React from "react";
import { InputWrapper, Input, Slider } from "./ToggleElements";
const Toggle = ({ onChange }) => (
  <InputWrapper>
    <Input type="checkbox" onChange={onChange} />
    <Slider />
  </InputWrapper>
);

export default Toggle;
