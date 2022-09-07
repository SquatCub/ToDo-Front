import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import NewTodoButton from "../components/NewTodo/NewTodoButton";
import SearchControls from "../components/SearchControls/SearchControls";
import TodoList from "../components/TodoList/TodoList";
import useTodos from "../services/hooks/useTodos";

const Main = () => {
  const [todos] = useTodos("todos");

  return (
    <Container>
      <SearchControls />
      <NewTodoButton />
      <TodoList items={todos} />
    </Container>
  );
};

export default Main;
