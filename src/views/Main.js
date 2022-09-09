import { useReducer, useState } from "react";
import Container from "../components/Container/Container";
import Metrics from "../components/Metrics/Metrics";
import NewTodoButton from "../components/NewTodo/NewTodoButton";
import PaginationControls from "../components/PaginationControls/PaginationControls";
import SearchControls from "../components/SearchControls/SearchControls";
import TodoList from "../components/TodoList/TodoList";
import useTodos from "../services/hooks/useTodos";
import { searchReducer } from "../utils/reducers/searchReducer";
const Main = () => {
  const [searchState, dispatchState] = useReducer(searchReducer, {
    nameInput: "",
    priorityInput: "",
    stateInput: "",
  });
  const [hasChanged, setHasChanged] = useState(false);
  const [page, setPage] = useState(1);
  const [todos, size] = useTodos(hasChanged, page, searchState);
  const refresh = () => {
    setHasChanged((hasChanged) => setHasChanged(!hasChanged));
  };

  return (
    <Container>
      <SearchControls
        searchState={searchState}
        dispatchState={dispatchState}
        refresh={refresh}
      />
      <NewTodoButton refresh={refresh} />
      <TodoList items={todos} refresh={refresh} />
      <PaginationControls page={page} setPage={setPage} size={size} />
      <Metrics refresh={refresh} />
    </Container>
  );
};

export default Main;
