//imports needed for Home Component
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { AuthContext } from "../Auth";
import EventCalendar from "../components/EventCalendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Home.css";

// Home page  (Only visible when user is signed in and authenticated)

const Home = () => {
  //state and context needed for form and db functions
  const { currentUser } = useContext(AuthContext);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [newDate, setNewDate] = useState(null);

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

  //function for adding a new todo
  const handleNewTodo = async (event) => {
    event.preventDefault();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (month <= 9) {
      month = `0${month}`;
    }
    if (day <= 9) {
      day = `0${day}`;
    }
    let formattedDate = `${newDate.getFullYear()}-${month}-${day}`;

    const todoObject = {
      id: todos.length + 1,
      title: newTodo,
      date: formattedDate,
    };
    setTodos(todos.concat(todoObject));
    setNewTodo("");
    setNewDate(null);
    try {
      await db
        .collection("users")
        .doc(currentUser.uid)
        .set({
          todos: [...todos, todoObject],
        });
    } catch (err) {
      console.log(err);
      alert("Error, todo was not saved. Please refresh page and try again");
    }
  };

  // onchange newTodo function
  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  //delete todo function
  const deleteTodo = async (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(todos.filter((todo) => todo.id !== todoId));
    try {
      await db.collection("users").doc(currentUser.uid).update({
        todos: updatedTodos,
      });
    } catch (err) {
      alert("Todo was not removed. Please refresh page and try again");
    }
  };

  const updateTodo = async (todoId, index) => {
    let todo = todos.filter((todo) => todo.id === todoId);
    todo = todo[0];

    const update = prompt("Update todo text or date: (type text or date)");
    if (update === "text") {
      const todoText = prompt(
        "What would you like to update text with",
        todo.value
      );
      todo.value = todoText;
      const newTodos = todos;
      newTodos[index] = todo;
      setTodos([...newTodos]);
      try {
        await db.collection("users").doc(currentUser.uid).update({
          todos: newTodos,
        });
      } catch (err) {
        alert("Todo was not updated. Please refresh page and try again");
      }
    }
  };

  return (
    <div id="homepage">
      <h1>Home</h1>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </button>
      {/* Basic todo form created for now. Used to add todos */}

      <form id="todoForm" onSubmit={handleNewTodo}>
        <input type="text" onChange={handleNewTodoChange} value={newTodo} />
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={newDate}
          onChange={(date) => setNewDate(date)}
        />
        <button type="submit" />
      </form>
      {/* Mapping out todos */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete Todo
          </button>
          <button
            onClick={() => {
              updateTodo(todo.id, todos.indexOf(todo));
            }}
          >
            Update Todo
          </button>
        </div>
      ))}
      <EventCalendar todos={todos} />
    </div>
  );
};

export default Home;
