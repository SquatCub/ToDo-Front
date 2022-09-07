import { BACKEND_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
const useTodo = (time) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(BACKEND_URL + "todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data.reverse());
      });
  }, [time]);

  return [todos];
};

export default useTodo;
