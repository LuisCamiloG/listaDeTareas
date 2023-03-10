import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiXCircle } from "react-icons/bi";
import {
  useActualizarEstadoTareasMutation,
  useActualizarTareasMutation,
  useEliminarTareasMutation,
} from "../Redux/Api";
import "../App.css";
import { useAuthStore } from "../Redux/zustand";

export const TodoItem = ({ todo }) => {
  const [actualizar, setActualizar] = useState(false);
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [indexEdit, setIndexEdit] = useState("");
  const profileAuth = useAuthStore((state) => state.profile);
  const [edit] = useActualizarTareasMutation();
  const [editState] = useActualizarEstadoTareasMutation();
  const [eliminar] = useEliminarTareasMutation();
  const handleDelete = (_id) => {
    eliminar({
      _id,
      token: profileAuth?.token,
    });
  };
  const handleUpdateTodo = (_id, tarea, descripcion) => {
    edit({
      _id: _id,
      datoTask: {
        tarea: tarea,
        descripcion: descripcion,
      },
      token: profileAuth?.token,
    });
  };
  const handleUpdateState = (_id, estado) => {
    editState({
      _id: _id,
      datoEstadoTask: {
        estado,
      },
      token: profileAuth?.token,
    });
  };

  const editTask = (e) => {
    e.preventDefault();
    setTarea(e.target.value);
  };
  const editDescripcion = (e) => {
    e.preventDefault();
    setDescripcion(e.target.value);
  };
  // console.log(todo);
  return (
    <>
      {indexEdit == todo._id && actualizar ? (
        // Editar tareas
        <li className="li">
          <div>
            <div className="conten_li">
              <span>Tarea:</span>
              <input
                name="tarea"
                value={tarea}
                onChange={editTask}
                className="input-edit"
              ></input>
            </div>
            <div className="conten_li">
              <span>Descripcion:</span>
              <input
                name="descripcion"
                value={descripcion}
                onChange={editDescripcion}
                className="input-edit"
              ></input>
            </div>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                handleDelete(todo._id);
              }}
              className="btn-4"
            >
              <FaTrash className="btn-2" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleUpdateTodo(todo._id, tarea, descripcion);
                setActualizar(!actualizar);
              }}
              className="btn-guardar"
            >
              Guardar
            </button>
          </div>
        </li>
      ) : (
        // Agregar tareas vista principal
        <li className="li">
          <div>
            {todo.estado == false ? (
              <button
                onClick={(e) => {
                  handleUpdateState(todo._id, todo.estado === false);
                }}
                // className="btn-3"
              >
                <AiOutlineCheckCircle />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleUpdateState(todo._id, todo.estado === false);
                }}
                // className="btn-3"
              >
                <BiXCircle />
              </button>
            )}
            <div className="conten_li">
              <p style={{ fontWeight: "bold" }}>{todo.tarea}</p>
            </div>
            <div className="conten_li">
              <p>{todo.descripcion}</p>
            </div>
            <div className="conten_li">
              <p>
                {todo.estado == true ? (
                  <b style={{ color: "#21a3a3" }}>completado</b>
                ) : (
                  <b style={{ color: "#ac0d0d" }}>incompleta</b>
                )}
              </p>
            </div>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                handleDelete(todo._id);
              }}
              className="btn-4"
            >
              <FaTrash className="btn-2" />
            </button>

            <button
              onClick={(e) => {
                setIndexEdit(todo._id);
                setActualizar(!actualizar);
                setDescripcion(todo.descripcion);
                setTarea(todo.tarea);
              }}
              className="btn-3"
            >
              <FaEdit className="btn-1" />
            </button>
          </div>
        </li>
      )}
    </>
  );
};
