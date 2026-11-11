import { useState } from 'react';
import UserProfile from './components/UserProfile';
import FilterButtonGroup from './components/FilterButtonGroup';
import TaskItem from './components/TaskItem';
import { filterTasks } from './utils/filterTasks';
import { useTasks } from './hooks/useTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />
      <FilterButtonGroup currentFilter={filter} onFilterChange={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
