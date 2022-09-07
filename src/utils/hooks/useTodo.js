import { BACKEND_URL } from "../constants";
import { useState, useEffect } from "react";
const useTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(process.env);
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
