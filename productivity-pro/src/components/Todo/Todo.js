//imports needed for Todo Components
import React, { useContext } from "react";
import { TodoWrapper } from "./TodoElements";
import { AuthContext } from "../.././context/Auth";
import { TodosContext } from "../.././context/TodosContext";
import { db } from "../../services/firebase";

const Todo = ({ todo }) => {
  // context and state needed for Todo component
  const { currentUser } = useContext(AuthContext);
  const { todos, setTodos } = useContext(TodosContext);

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
    <TodoWrapper>
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
    </TodoWrapper>
  );
};

export default Todo;
