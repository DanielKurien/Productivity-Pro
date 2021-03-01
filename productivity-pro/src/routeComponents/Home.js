//imports needed for Home Component
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { AuthContext } from "../Auth";
import "./Home.css";

// Home page  (Only visible when user is signed in and authenticated)

const Home = () => {
  //state and context needed for form and db functions
  const { currentUser } = useContext(AuthContext);
  const [newTodo, setNewTodo] = useState("");
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

  //function for adding a new todo
  const handleNewTodo = async (event) => {
    event.preventDefault();
    const todoObject = {
      id: todos.length + 1,
      value: newTodo,
    };
    setTodos(todos.concat(todoObject));
    setNewTodo("");
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

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </button>
      {/* Basic todo form created for now. Used to add todos*/}
      <form id="todoForm" onSubmit={handleNewTodo}>
        <input type="text" onChange={handleNewTodoChange} value={newTodo} />
      </form>
      {/* Mapping out todos */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.value}</p>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete Todo
          </button>
        </div>
      ))}
    </>
  );
};

export default Home;
