import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;
