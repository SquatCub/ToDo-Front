import { useEffect, useReducer, useState } from "react";
import Container from "../components/Container/Container";
import Metrics from "../components/Metrics/Metrics";
import NewTodoButton from "../components/NewTodo/NewTodoButton";
import PaginationControls from "../components/PaginationControls/PaginationControls";
import SearchControls from "../components/SearchControls/SearchControls";
import TodoList from "../components/TodoList/TodoList";
import useTodos from "../utils/hooks/useTodos";
import TodoContext from "../utils/context/todo-context";
import { searchReducer } from "../utils/reducers/search-reducer";
import { orderReducer } from "../utils/reducers/order-reducers";

const Main = () => {
  const [searchState, dispatchState] = useReducer(searchReducer, {
    nameInput: "",
    priorityInput: "",
    stateInput: "",
  });
  const [orderBy, dispatchOrder] = useReducer(orderReducer, {
    orderByPriority: "",
    orderByDueDate: "",
    orderByPriorityAndDueDate: "",
    orderByDueDateAndPriority: "",
  });
  const [hasChanged, setHasChanged] = useState(false);
  const [page, setPage] = useState(1);

  const [todos, size] = useTodos(hasChanged, page, searchState, orderBy);

  const refresh = () => {
    setHasChanged((hasChanged) => !hasChanged);
  };

  return (
    <Container>
      <TodoContext.Provider
        value={{
          items: todos,
          refresh: refresh,
        }}
      >
        <SearchControls
          searchState={searchState}
          dispatchState={dispatchState}
        />
        <NewTodoButton />
        <TodoList orderBy={orderBy} dispatchOrder={dispatchOrder} />
        <PaginationControls page={page} setPage={setPage} size={size} />
        <Metrics />
      </TodoContext.Provider>
    </Container>
  );
};

export default Main;
