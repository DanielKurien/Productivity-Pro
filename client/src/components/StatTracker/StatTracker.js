/* StatTracker component that holds ALL the functionality for stat tracking. 
Takes the user's friends and fetches the amount of todos and work pomodoro timers completed.
Also, the user's information for these two categories. Component takes
advantage of Firebase's onSnapshot functionality, which will allow the user to see 
realtime change. Meaning, as soon as a friend completes a todo or work timer,
the change is reflected in the Stat Tracker.
*/

import React, { useContext, useState, useEffect } from "react";
import { db } from "../../services/firebase";
import {
  StatTrackerWrapper,
  StatMainWrapper,
  StatHeading,
  StatText,
  AddFriendButton,
  AddFriendInput,
  AddFriendForm,
  StatTrackerTable,
  StatTableHeading,
  StatTableRow,
  StatTableHead,
  StatTableItem,
  StatTableItemUser,
  StatTableBody,
  StatTableWrapper,
} from "./StatTrackerElements";
import { AuthContext } from "../.././context/Auth";
import { FriendsContext } from "../../context/FriendsContext";

const StatTracker = () => {
  const { currentUser } = useContext(AuthContext);
  const { friends, setFriends } = useContext(FriendsContext);
  const [newFriend, setNewFriend] = useState("");
  const [userData, setUserData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);
  const [emails, setEmails] = useState(null);
  useEffect(() => {
    if (!friends || friends.length === 0) return;
    setEmails(
      friends.map((friend) => {
        return friend.email;
      })
    );
  }, [friends]);

  useEffect(() => {
    if (!emails || emails.length === 0) return;
    db.collection("emails")
      .where("email", "in", emails)
      .get()
      .then((querySnapshot) => {
        setFriendsData(
          querySnapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });
  }, [emails]);

  useEffect(() => {
    if (!emails) return;
    db.collection("emails")
      .where("email", "in", emails)
      .onSnapshot((querySnapshot) => {
        setFriendsData(
          querySnapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });
  }, [emails]);

  useEffect(() => {
    db.collection("emails")
      .where("email", "==", currentUser.email)
      .get()
      .then((userInfo) => {
        setUserData(userInfo.docs[0].data());
      });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    db.collection("emails")
      .where("email", "==", currentUser.email)
      .onSnapshot((userSnapshot) => {
        setUserData(userSnapshot.docs[0].data());
      });
    //eslint-disable-next-line
  }, []);

  const handleNewFriend = (event) => {
    event.preventDefault();
    try {
      db.collection("emails")
        .doc(newFriend)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            alert(
              "We're sorry, your friend does not use our application. Please encourage them to sign up."
            );
          } else {
            const alreadyFriend = friends.find(
              (friend) => friend.email === newFriend
            );

            if (alreadyFriend) {
              alert("This person is already your friend.");
            } else if (newFriend === currentUser.email) {
              alert("Your info is on the Stat Tracker.");
            } else {
              const friendObject = {
                id: friends.length + 1,
                email: newFriend,
              };
              setFriends(friends.concat(friendObject));
              db.collection("users")
                .doc(currentUser.uid)
                .update({
                  friends: [...friends, friendObject],
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }
        });
    } catch (err) {
      alert("Please add your friend's email in the input.");
    }
    setNewFriend("");
  };

  return (
    <StatTrackerWrapper>
      <StatMainWrapper>
        <StatHeading>
          <StatText>Stat Tracker</StatText>
          <AddFriendForm onSubmit={handleNewFriend}>
            <AddFriendInput
              onChange={(event) => setNewFriend(event.target.value)}
              type="email"
              placeholder="Add new friend by Email "
            />
            <AddFriendButton type="submit">Add Friend</AddFriendButton>
          </AddFriendForm>
        </StatHeading>
        <StatTableWrapper>
          <StatTrackerTable>
            <StatTableHead>
              <StatTableRow>
                <StatTableHeading>Email</StatTableHeading>
                <StatTableHeading>Work Timers</StatTableHeading>
                <StatTableHeading>Todos</StatTableHeading>
              </StatTableRow>
            </StatTableHead>
            <StatTableBody>
              <StatTableRow>
                <StatTableItemUser data-label="Email">
                  {userData.email}
                </StatTableItemUser>
                <StatTableItemUser data-label="Work Timers">
                  {userData.pomodoros}
                </StatTableItemUser>
                <StatTableItemUser data-label="Todos">
                  {userData.todosCompleted}
                </StatTableItemUser>
              </StatTableRow>
              {friendsData.map((friend) => (
                <StatTableRow key={friend.email}>
                  <StatTableItem data-label="Email">
                    {friend.email}
                  </StatTableItem>
                  <StatTableItem data-label="Work Timers">
                    {friend.pomodoros}
                  </StatTableItem>
                  <StatTableItem data-label="Todos">
                    {friend.todosCompleted}
                  </StatTableItem>
                </StatTableRow>
              ))}
            </StatTableBody>
          </StatTrackerTable>
        </StatTableWrapper>
      </StatMainWrapper>
    </StatTrackerWrapper>
  );
};

export default StatTracker;
