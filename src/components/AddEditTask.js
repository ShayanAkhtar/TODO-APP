import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique IDs

const AddEditTask = ({ onSave }) => {
  const [task, setTask] = useState({ id: '', title: '', description: '', category: 'General' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (task.id) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [task.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      // Assign a unique ID for new tasks
      task.id = uuidv4();
    }
    onSave(task);
    setTask({ id: '', title: '', description: '', category: 'General' });
  };

  return (
    <div className="add-edit-task">
      <h2>{isEditing ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <select name="category" value={task.category} onChange={handleChange}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default AddEditTask;
