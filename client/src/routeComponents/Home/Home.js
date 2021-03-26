//imports needed for Home Component
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { AuthContext } from "../.././context/Auth";
import { TodosContext } from "../../context/TodosContext";
import { ChillContext } from "../../context/ChillContext";
import { FriendsContext } from "../../context/FriendsContext";
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
  const [friends, setFriends] = useState([]);

  //fetching users current todos from database
  const fetchTodosAndFriends = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        setTodos(doc.data().todos);
        setFriends(doc.data().friends);
      });
  };

  useEffect(() => {
    fetchTodosAndFriends();
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
          <TodosContext.Provider value={{ todos, setTodos }}>
            <FriendsContext.Provider value={{ friends, setFriends }}>
              <RightTop>
                <TodoSection />
                <EventCalendar />
              </RightTop>
              <StatTracker />
            </FriendsContext.Provider>
          </TodosContext.Provider>
        </HomeRightColumnWrapper>
      </HomeFlexbox>
    </HomeContainer>
  );
};

export default Home;