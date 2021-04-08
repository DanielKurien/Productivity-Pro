//imports needed for Todo Components
import React, { useContext, useState } from "react";

import {
  TodoWrapper,
  DeleteIcon,
  CompletedIcon,
  TodoText,
  TodoDate,
  TodoDisplayWrapper,
  TodoRightWrapper,
  TodoChangeWrapper,
  IconsWrapper,
  TodoInput,
  TodoChangeForm,
  TodoChangeButton,
} from "./TodoElements";
import { AuthContext } from "../.././context/Auth";
import { TodosContext } from "../.././context/TodosContext";
import { db } from "../../services/firebase";

const Todo = ({ todo }) => {
  // context and state needed for Todo component
  const { currentUser } = useContext(AuthContext);
  const { todos, setTodos } = useContext(TodosContext);
  const [todoTitle, setTodoTitle] = useState("");
  const [input, setInput] = useState(false);

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

  const todoClickHandler = () => {
    if (!input) {
      setTodoTitle(todo.title);
      setInput(!input);
    }
  };

  const handleTodoTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  // const updateTodo = async (index) => {
  //   let todo = todos.filter((elementTodo) => elementTodo.id === todo.id);
  //   todo = todo[0];

  // const update = prompt("Update todo text or date: (type text or date)");
  // if (update === "text") {
  //   const todoText = prompt(
  //     "What would you like to update text with",
  //     todo.value
  //   );
  //   todo.value = todoText;
  //   const newTodos = todos;
  //   newTodos[index] = todo;
  //   setTodos([...newTodos]);
  //   try {
  //     await db.collection("users").doc(currentUser.uid).update({
  //       todos: newTodos,
  //     });
  //   } catch (err) {
  //     alert("Todo was not updated. Please refresh page and try again");
  //   }
  // }
  // };

  const handleTodoChange = async (event) => {
    event.preventDefault();
    let updatedTodo = todos.filter((elementTodo) => elementTodo.id === todo.id);
    let index = todos.indexOf(todo);
    updatedTodo = updatedTodo[0];
    updatedTodo.title = todoTitle;
    const newTodos = todos;
    newTodos[index] = updatedTodo;
    setTodos([...newTodos]);
    try {
      await db.collection("users").doc(currentUser.uid).update({
        todos: newTodos,
      });
    } catch (err) {
      alert("Todo was not updated. Please refresh page and try again");
    }
    setInput(!input);
  };
  return (
    <TodoWrapper onClick={todoClickHandler}>
      {input ? (
        <TodoChangeWrapper>
          <TodoChangeForm onSubmit={handleTodoChange}>
            <TodoInput value={todoTitle} onChange={handleTodoTitleChange} />
            <TodoChangeButton>SubmitButton</TodoChangeButton>
          </TodoChangeForm>
        </TodoChangeWrapper>
      ) : (
        <TodoDisplayWrapper>
          {" "}
          <TodoText>{todo.title}</TodoText>
          <TodoRightWrapper>
            <TodoDate>{todo.date}</TodoDate>
            <IconsWrapper>
              <CompletedIcon />
              <DeleteIcon
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete Todo
              </DeleteIcon>
            </IconsWrapper>
          </TodoRightWrapper>
          {/* <button
        onClick={() => {
          updateTodo(todo.id, todos.indexOf(todo));
        }}
      >
        Update Todo
      </button> */}
        </TodoDisplayWrapper>
      )}
    </TodoWrapper>
  );
};

export default Todo;
