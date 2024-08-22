import React from 'react';
import '../styles.css'; // Make sure to import the CSS file

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <div className="task-item-header">
      <h3>{task.title}</h3>
        <span className="category">{task.category}</span>
        
      </div>
      <p>{task.description}</p>
      <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;