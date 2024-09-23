import { useState } from 'react';
import { useTasks } from '../context/tasks';

export const TaskForm = ({ existingTask, onClose }) => {
  const { addTask, editTask } = useTasks();
  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const [description, setDescription] = useState(existingTask ? existingTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('El título es obligatorio');
      return;
    }

    const newTask = {
      id: existingTask ? existingTask.id : Date.now(),
      title,
      description
    };

    if (existingTask) {
      editTask(newTask);
    } else {
      addTask(newTask);
    }

    setTitle('');
    setDescription('');
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título de la tarea:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción de la tarea:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">{existingTask ? 'Editar Tarea' : 'Agregar Tarea'}</button>
    </form>
  );
};