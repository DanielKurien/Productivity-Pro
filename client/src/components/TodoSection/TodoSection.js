/* Main TodoSection component that contains the TodoForm and also
will render out a Todo componet for each todo a user has
*/

//imports for TodoSection;
import React, { useContext } from "react";
import {
  TodoSectionWrapper,
  TodoMainWrapper,
  TodoItemsWrapper,
} from "./TodoSectionElements";
import { TodosContext } from "../../context/TodosContext";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

const TodoSection = () => {
  // todos context needed for TodoSection
  const { todos } = useContext(TodosContext);

  return (
    /* Wrapper for holding TodoForm and todos */
    <TodoSectionWrapper>
      <TodoMainWrapper>
        <TodoForm />
        <TodoItemsWrapper>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </TodoItemsWrapper>
      </TodoMainWrapper>
    </TodoSectionWrapper>
  );
};

export default TodoSection;
