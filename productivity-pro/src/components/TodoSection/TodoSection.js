//imports for TodoSection;
import React, { useContext } from "react";
import { TodoSectionWrapper } from "./TodoSectionElements";
import { TodosContext } from "../../TodosContext";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

const TodoSection = () => {
  // todos context needed for TodoSection
  const { todos } = useContext(TodosContext);
  return (
    /* Wrapper for holding TodoForm and todos */
    <TodoSectionWrapper>
      {/* Rendering out form for adding todos*/}
      <TodoForm />
      {/* Rendering out each todo*/}
      {todos.map((todo) => (
        <Todo id={todo.id} todo={todo} />
      ))}
    </TodoSectionWrapper>
  );
};

export default TodoSection;
