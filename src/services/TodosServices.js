import { BACKEND_URL } from "../utils/constants";

export const createTodo = async (todo) => {
  const response = await fetch(BACKEND_URL + "todos", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const updateTodo = async (todo, todoId) => {
  const response = await fetch(BACKEND_URL + "todos/" + todoId, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodo = async (todoId) => {
  const response = await fetch(BACKEND_URL + "todos/" + todoId, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
};

export const updateTodoAsDoneUndone = async (todoId, option) => {
  const response = await fetch(BACKEND_URL + "todos/" + todoId + "/" + option, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
};

export const getMetrics = async () => {
  const response = await fetch(BACKEND_URL + "todos/metrics").then((response) =>
    response.json()
  );
  return response;
};
