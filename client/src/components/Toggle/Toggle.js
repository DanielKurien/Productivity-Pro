/*Simple Toggle Component used in the CountdownTimer. Used to switch
from a Work to Chill pomodoro timer or vice versa. Not much React Code for 
this component. The CSS is really used to make it work as a toggle.
*/

import React from "react";
import { InputWrapper, Input, Slider } from "./ToggleElements";
const Toggle = ({ onChange }) => (
  <InputWrapper>
    <Input type="checkbox" onChange={onChange} />
    <Slider />
  </InputWrapper>
);

export default Toggle;
