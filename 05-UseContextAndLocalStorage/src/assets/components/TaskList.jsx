import React from 'react';
import { useTasks } from '../context/tasks';

export const TaskList = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};