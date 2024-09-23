import { useState } from "react";
import { ListOfTasks } from "../components/ShowTasks";
import { useTasks } from "../context/tasks"

export const GetTasks = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, addTask, deleteTask, editTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    addTask({ id: Date.now(), title: taskTitle });
    setTaskTitle('');
  };

  return (
    <div className="container">
      <header className="task-manager">
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Nueva tarea"
            type="text"
          />
          <button type="submit">Agregar Tarea</button>
        </form>
      </header>
      <main>
        <ListOfTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </main>
    </div>
  );
};
