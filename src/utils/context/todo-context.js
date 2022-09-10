import { createContext } from "react";

const TodoContext = createContext({
  items: [],
  refresh: () => {},
});

export default TodoContext;
