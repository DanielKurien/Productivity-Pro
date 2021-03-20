//imports needed for Home Component
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { AuthContext } from "../.././context/Auth";
import { TodosContext } from "../../context/TodosContext";
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
      <TodosContext.Provider value={{ todos, setTodos }}>
        <HomeFlexbox>
          <HomeLeftColumnWrapper>
            <CountdownTimer />
            <SpotifyFunctionality />
          </HomeLeftColumnWrapper>
          <HomeRightColumnWrapper>
            <RightTop>
              <TodoSection />
              <EventCalendar />
            </RightTop>
            <StatTracker />
          </HomeRightColumnWrapper>
        </HomeFlexbox>
      </TodosContext.Provider>
    </HomeContainer>
  );
};

export default Home;
