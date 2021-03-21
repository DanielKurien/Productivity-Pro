//imports for TodoSection;
import React, { useContext } from "react";
import { TodoSectionWrapper, TodoMainWrapper } from "./TodoSectionElements";
import { TodosContext } from "../../context/TodosContext";
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
      <TodoMainWrapper>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoMainWrapper>
    </TodoSectionWrapper>
  );
};

export default TodoSection;
