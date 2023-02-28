import React from "react";
import { useObtenerTareasQuery } from "../Redux/Api";
import { TodoItem } from "./TodoItem";
import "../App.css";
import { useAuthStore } from "../Redux/zustand";

export const TodoList = ({}) => {
  const profileAuth = useAuthStore((state) => state.profile);
  const { data, isError, isSuccess, error } = useObtenerTareasQuery(
    profileAuth?.token
  );

  // console.log(data);
  return (
    <ul className="ul-edit">
      {data?.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};
