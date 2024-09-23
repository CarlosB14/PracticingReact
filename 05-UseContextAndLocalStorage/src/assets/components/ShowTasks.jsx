import { useState } from "react";

export function ListOfTasks({ tasks, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (taskId) => {
    editTask(taskId, { ...tasks.find(task => task.id === taskId), title: newTitle });
    setIsEditing(null);
  }

  return (
    <>
      {tasks.map((task) => (
        <article key={task.id} className="task">
          {isEditing === task.id ? (
            <>
              <input
                type="text"
                defaultValue={task.title}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button onClick={() => handleEdit(task.id)}>Guardar</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
              <button onClick={() => setIsEditing(task.id)}>Editar</button>
            </>
          )}
        </article>
      ))}
    </>
  );
}
