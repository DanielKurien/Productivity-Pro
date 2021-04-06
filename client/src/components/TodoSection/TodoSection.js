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
  console.log(todos);
  return (
    /* Wrapper for holding TodoForm and todos */
    <TodoSectionWrapper>
      {/* Rendering out form for adding todos*/}
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
