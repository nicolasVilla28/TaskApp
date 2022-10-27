import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Añadir tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Añadir descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
