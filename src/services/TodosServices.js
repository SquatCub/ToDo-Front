import { BACKEND_URL } from "../utils/constants";
import { useState, useEffect } from "react";

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
