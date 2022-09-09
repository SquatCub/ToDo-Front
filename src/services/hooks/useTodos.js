import { BACKEND_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
const useTodo = (time, page, searchState) => {
  const [todos, setTodos] = useState([]);
  const [size, setSize] = useState(false);

  useEffect(() => {
    fetch(
      `${BACKEND_URL}todos?page=${page}&name=${searchState.nameInput}&priority=${searchState.priorityInput}&state=${searchState.stateInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.data);
        setSize(data.size);
      });
  }, [time, page]);

  return [todos, size];
};

export default useTodo;
