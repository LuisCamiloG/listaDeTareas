import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo._id;
    const description = updateDescription;

    handleUpdateTodo(id, description);
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="¿Qué hay que hacer?"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <button className="btn-edit" type="submit">
        <FaEdit className="btn-edit" />
      </button>
    </form>
  );
};
