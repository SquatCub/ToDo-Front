import { BACKEND_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
const useTodo = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(props);
    fetch(BACKEND_URL + "todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  return [todos];
};

export default useTodo;
