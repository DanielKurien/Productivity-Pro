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
} from "./StatTrackerElements";
import { AuthContext } from "../.././context/Auth";
import { FriendsContext } from "../../context/FriendsContext";

const StatTracker = () => {
  const { currentUser } = useContext(AuthContext);
  const { friends, setFriends } = useContext(FriendsContext);
  const [newFriend, setNewFriend] = useState("");
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (friends.length !== 0) {
      const emails = friends.map((friend) => friend.email);
      const newData = [];
      db.collection("emails")
        .where("email", "in", emails)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            newData.push(doc.data());
          });
        });
      setFriendsData(newData);
    }
  }, [friends]);

  setTimeout(() => {
    setLoading(!loading);
  }, 100);

  const handleNewFriend = (event) => {
    event.preventDefault();

    db.collection("emails")
      .doc(newFriend)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          alert("Your friend does not use our application. Sorry about that.");
        } else {
          const alreadyFriend = friends.find(
            (friend) => friend.email === newFriend
          );

          if (alreadyFriend) {
            alert("This person is already your friend");
          } else if (newFriend === currentUser.email) {
            alert("You can't add youself as a friend.");
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
              placeholder="Add new friend by Email"
            />
            <AddFriendButton type="submit">Add Friend</AddFriendButton>
          </AddFriendForm>
        </StatHeading>
        <table>
          <tbody>
            <tr>
              <th>Email</th>
              <th>Pomodoro Work Timers Completed</th>
              <th>Todos Completed</th>
            </tr>
            {friendsData.map((friend) => (
              <tr key={friend.email}>
                <td>{friend.email}</td>
                <td>{friend.pomodoros}</td>
                <td>{friend.todosCompleted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </StatMainWrapper>
    </StatTrackerWrapper>
  );
};

export default StatTracker;
