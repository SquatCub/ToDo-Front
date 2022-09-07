import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import NewTodoButton from "../components/NewTodo/NewTodoButton";
import SearchControls from "../components/SearchControls/SearchControls";
import TodoList from "../components/TodoList/TodoList";
import useTodos from "../services/hooks/useTodos";

const Main = () => {
  const [hasChanged, setHasChanged] = useState(false);
  const [todos] = useTodos(hasChanged);
  const refresh = () => {
    setHasChanged((hasChanged) => setHasChanged(!hasChanged));
  };

  return (
    <Container>
      <SearchControls />
      <NewTodoButton refresh={refresh} />
      <TodoList items={todos} />
    </Container>
  );
};

export default Main;
