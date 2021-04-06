// imports for TodoForm
import React, { useContext, useState } from "react";
import { TodoFormWrapper, TodoFormInput, TodoButton } from "./TodoFormElements";
import { TodosContext } from "../.././context/TodosContext";
import { AuthContext } from "../.././context/Auth";
import { db } from "../../services/firebase";

const TodoForm = () => {
  // Context and state needed for TodoForm Component
  const { currentUser } = useContext(AuthContext);
  const { todos, setTodos } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState(null);
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
        .update({
          todos: [...todos, todoObject],
        });
    } catch (err) {
      console.log(err);
      alert("Error, todo was not saved. Please refresh page and try again");
    }
  };

  //function to handle onChange of Todo
  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    //Wrapper for full TodoForm
    <TodoFormWrapper onSubmit={handleNewTodo}>
      {/* Input to add task for todo */}
      <TodoFormInput
        type="text"
        onChange={handleNewTodoChange}
        value={newTodo}
      />
      {/* Input to add date for todo */}

      {/* Button to submit new todo */}
      <TodoButton type="submit">Submit Todo</TodoButton>
    </TodoFormWrapper>
  );
};

export default TodoForm;
