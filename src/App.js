import React, { useState } from 'react';
import AddEditTask from './components/AddEditTask';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');

  const handleAddOrEditTask = (task) => {
    setTasks((prevTasks) => {
      const existingTaskIndex = prevTasks.findIndex(t => t.id === task.id);
      if (existingTaskIndex >= 0) {
        const updatedTasks = [...prevTasks];
        updatedTasks[existingTaskIndex] = task;
        return updatedTasks;
      } else {
        return [...prevTasks, task];
      }
    });
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  const filteredTasks = filterCategory === 'All' ? tasks : tasks.filter(task => task.category === filterCategory);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <AddEditTask onSave={handleAddOrEditTask} />
      <CategoryFilter currentCategory={filterCategory} onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
