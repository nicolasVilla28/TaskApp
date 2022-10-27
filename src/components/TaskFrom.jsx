import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    createTask({title, description})
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Añadir tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea placeholder="Añadir descripcion" onChange={e => setDescription(e.target.value)}></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
