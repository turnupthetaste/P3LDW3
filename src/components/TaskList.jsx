import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskList = ({ categoryId, tasks }) => {
  const { toggleTask, removeTask } = useTaskContext();

  if (tasks.length === 0) {
    return (
      <p className="empty-message">
        Nenhuma tarefa adicionada ainda.
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : 'pending'}`}
        >
          <label className="task-label">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(categoryId, task.id)}
              className="task-checkbox"
            />
            <span className={`task-name ${task.completed ? 'task-completed' : ''}`}>
              {task.name}
            </span>
          </label>
          
          <div className="task-actions">
            <span className={`status-badge ${task.completed ? 'status-completed' : 'status-pending'}`}>
              {task.completed ? 'Concluída' : 'Pendente'}
            </span>
            <button
              onClick={() => removeTask(categoryId, task.id)}
              className="btn-remove"
              title="Remover tarefa"
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
