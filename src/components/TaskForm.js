import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import categories from "../data/categories";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #0d6efd;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #0b5ed7;
  }
`;

const TaskForm = ({ addTask, updateTask, tasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0].value);
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id && tasks) {
      const task = tasks.find((task) => task.id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setCategory(task.category);
        setDueDate(task.dueDate);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, category, dueDate };

    if (id) {
      updateTask({ id, ...taskData });
    } else {
      addTask(taskData);
    }
    navigate("/");
  };

  return (
    <FormContainer>
      <h2>{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </Select>
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button type="submit">{id ? "Update Task" : "Add Task"}</Button>
      </form>
    </FormContainer>
  );
};

export default TaskForm;
