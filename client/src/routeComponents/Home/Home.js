/* The Home Component is the Top Level Component when the user is logged in.
  Since it is the top-level component it contains alot of global state to provide 
  to child components, so many deeper child components can also access the state.
  The Child components are the top-level sections of the app.
  The Home Component is attatched to the PrivateRoute created. Meaning, the user can 
  only access it if they're logged in.
*/

//imports needed for Home Component
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { AuthContext } from "../.././context/Auth";
import { TodosContext } from "../../context/TodosContext";
import { ChillContext } from "../../context/ChillContext";
import { FriendsContext } from "../../context/FriendsContext";
import EventCalendar from "../../components/EventCalendar/EventCalendar.js";
import CountdownTimerChanger from "../../components/CountdownTimerChanger/CountdownTimerChanger";
import TodoSection from "../../components/TodoSection/TodoSection";
import SpotifyFunctionality from "../../components/SpotifyFunctionality/SpotifyFunctionality";
import HomeNav from "../../components/HomeNav/HomeNav";
import StatTracker from "../../components/StatTracker/StatTracker";
import {
  HomeContainer,
  HomeFlexbox,
  HomeLeft,
  HomeLeftColumn,
  HomeRight,
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
        <TodosContext.Provider value={{ todos, setTodos }}>
          <FriendsContext.Provider value={{ friends, setFriends }}>
            <HomeLeft>
              <ChillContext.Provider value={{ chill, setChill }}>
                <HomeLeftColumn>
                  <CountdownTimerChanger />
                  <SpotifyFunctionality />
                </HomeLeftColumn>
                <TodoSection />
              </ChillContext.Provider>
            </HomeLeft>
            <HomeRight>
              <EventCalendar />
              <StatTracker />
            </HomeRight>
          </FriendsContext.Provider>
        </TodosContext.Provider>
      </HomeFlexbox>
    </HomeContainer>
  );
};

export default Home;
