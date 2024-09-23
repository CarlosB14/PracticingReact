import { TaskList } from './assets/components/TaskList';
import { TaskProvider} from './assets/context/tasks'
import { TaskForm } from './assets/components/TaskForm'

export const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Gestión de Tareas</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};