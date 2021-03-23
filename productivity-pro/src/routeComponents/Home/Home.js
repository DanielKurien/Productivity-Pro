//imports needed for Home Component
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { AuthContext } from "../.././context/Auth";
import { TodosContext } from "../../context/TodosContext";
import { ChillContext } from "../../context/ChillContext";
import EventCalendar from "../../components/EventCalendar";
import CountdownTimer from "../../components/Countdown/CountdownTimer";
import TodoSection from "../../components/TodoSection/TodoSection";
import SpotifyFunctionality from "../../components/SpotifyFunctionality/SpotifyFunctionality";
import HomeNav from "../../components/HomeNav/HomeNav";
import StatTracker from "../../components/StatTracker/StatTracker";
import {
  HomeContainer,
  HomeFlexbox,
  HomeLeftColumnWrapper,
  HomeRightColumnWrapper,
  RightTop,
} from "./HomeElements";
// Home page  (Only visible when user is signed in and authenticated)

const Home = () => {
  //state and context needed for form and db functions
  const { currentUser } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [chill, setChill] = useState(false);

  //fetching users current todos from database
  const fetchTodos = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        setTodos(doc.data().todos);
      });
  };

  useEffect(() => {
    fetchTodos();
    //eslint-disable-next-line
  }, []);

  return (
    <HomeContainer>
      <HomeNav />
      <HomeFlexbox>
        <HomeLeftColumnWrapper>
          <ChillContext.Provider value={{ chill, setChill }}>
            <CountdownTimer />
            <SpotifyFunctionality />
          </ChillContext.Provider>
        </HomeLeftColumnWrapper>
        <HomeRightColumnWrapper>
          <RightTop>
            <TodosContext.Provider value={{ todos, setTodos }}>
              <TodoSection />
              <EventCalendar />
            </TodosContext.Provider>
          </RightTop>
          <StatTracker />
        </HomeRightColumnWrapper>
      </HomeFlexbox>
    </HomeContainer>
  );
};

export default Home;
