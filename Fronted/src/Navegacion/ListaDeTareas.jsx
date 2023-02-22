import React from "react";
import "../App.css";
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodo";
import NavBar from "./NavBar";

function ListaDeTareas() {
  const { todos, handleNewTodo } = useTodo();

  return (
    <>
      <NavBar />
      <div className="card-to-do">
        <div className="subContainer">
          <h1 style={{ fontSize: "40px" }}>Lista de tareas</h1>

          <div className="add-todo">
            <h3>Agregar Tarea</h3>
            <TodoAdd handleNewTodo={handleNewTodo} />
          </div>

          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default ListaDeTareas;
