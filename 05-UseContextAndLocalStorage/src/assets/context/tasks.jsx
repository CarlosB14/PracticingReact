// TaskContext.jsx
import { createContext, useContext, useReducer } from 'react';

// Crear el contexto
const TaskContext = createContext();

// Definir las acciones del reducer
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Reducer para manejar el estado de las tareas
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

// Proveedor del contexto de tareas
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (task) => dispatch({ type: ADD_TASK, payload: task });
  const editTask = (task) => dispatch({ type: EDIT_TASK, payload: task });
  const deleteTask = (id) => dispatch({ type: DELETE_TASK, payload: id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook para usar el contexto de tareas
export const useTasks = () => useContext(TaskContext);