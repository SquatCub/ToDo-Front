import { BACKEND_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
const useTodo = (time, page, searchState, orderBy) => {
  const [todos, setTodos] = useState([]);
  const [size, setSize] = useState(false);

  useEffect(() => {
    fetch(
      `${BACKEND_URL}todos?page=${page}&name=${searchState.nameInput}&priority=${searchState.priorityInput}&done=${searchState.stateInput}&orderByDueDate=${orderBy.orderByDueDate}&orderByPriority=${orderBy.orderByPriority}&orderByPriorityAndDueDate=${orderBy.orderByPriorityAndDueDate}&orderByDueDateAndPriority=${orderBy.orderByDueDateAndPriority}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.data);
        setSize(data.size);
      })
      .catch((error) => {
        console.log("No connection");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, page, orderBy]);

  return [todos, size];
};

export default useTodo;
