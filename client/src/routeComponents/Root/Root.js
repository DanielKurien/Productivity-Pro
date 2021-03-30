//imports for Root Component
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  RootWrapper,
  RootMain,
  RootImage,
  RootHeading,
  TypewriterHeading,
} from "./RootElements";
import image from "../../images/productive.svg";
import Typewriter from "typewriter-effect";

//Component for Root Route when user just visits site (not logged in)
const Root = () => {
  return (
    <RootWrapper>
      <Navbar />
      <RootMain>
        <RootHeading>Productivity Pro</RootHeading>
        <RootImage src={image} />
        <TypewriterHeading>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: #cdd9e5;">The </span>')
                .typeString("All-in-one Productivity App")
                .pauseFor(2000)
                .deleteChars(27)
                .typeString("To-do Planner")
                .pauseFor(2000)
                .deleteChars(13)
                .typeString("Pomodoro Technique Workspace")
                .pauseFor(2000)
                .deleteChars(28)
                .typeString("Friend Productivity Tracker")
                .pauseFor(2000)
                .deleteChars(27)
                .start();
            }}
          />
        </TypewriterHeading>
      </RootMain>
    </RootWrapper>
  );
};

export default Root;
