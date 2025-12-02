import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddTask = ({ categoryId }) => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (taskName.trim()) {
      addTask(categoryId, taskName);
      setTaskName('');
    }
  };

  return (
    <div className="add-task">
      <span className="add-task-label">Adicionar Tarefa</span>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nova tarefa..."
          className="input-field input-small"
        />
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
