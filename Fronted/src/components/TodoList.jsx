import React from "react";
import { useObtenerTareasQuery } from "../Redux/Api";
import { TodoItem } from "./TodoItem";
import "../App.css";

export const TodoList = ({}) => {
  const { data, isError, isSuccess, error } = useObtenerTareasQuery();
  console.log(data);
  return (
    <ul className="ul-edit">
      {data?.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};
