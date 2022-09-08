import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import NewTodoButton from "../components/NewTodo/NewTodoButton";
import PaginationControls from "../components/PaginationControls/PaginationControls";
import SearchControls from "../components/SearchControls/SearchControls";
import TodoList from "../components/TodoList/TodoList";
import useTodos from "../services/hooks/useTodos";

const Main = () => {
  const [hasChanged, setHasChanged] = useState(false);
  const [page, setPage] = useState(1);
  const [todos, size] = useTodos(hasChanged, page);
  const refresh = () => {
    setHasChanged((hasChanged) => setHasChanged(!hasChanged));
  };

  return (
    <Container>
      <SearchControls />
      <NewTodoButton refresh={refresh} />
      <TodoList items={todos} />
      <PaginationControls page={page} setPage={setPage} size={size} />
    </Container>
  );
};

export default Main;
