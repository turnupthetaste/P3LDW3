import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const TaskContext = createContext();

// Provider do contexto
export const TaskProvider = ({ children }) => {
  // Estado que armazena todas as categorias e suas tarefas
  const [categories, setCategories] = useState([]);

  // Função para adicionar nova categoria
  const addCategory = (categoryName) => {
    if (categoryName.trim() === '') return;
    
    const newCategory = {
      id: Date.now(),
      name: categoryName.trim(),
      tasks: []
    };
    
    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

  // Função para adicionar tarefa a uma categoria específica
  const addTask = (categoryId, taskName) => {
    if (taskName.trim() === '') return;
    
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            tasks: [
              ...category.tasks,
              {
                id: Date.now(),
                name: taskName.trim(),
                completed: false
              }
            ]
          };
        }
        return category;
      })
    );
  };

  // Função para marcar/desmarcar tarefa como concluída
  const toggleTask = (categoryId, taskId) => {
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            tasks: category.tasks.map(task => {
              if (task.id === taskId) {
                return { ...task, completed: !task.completed };
              }
              return task;
            })
          };
        }
        return category;
      })
    );
  };

  // Função para remover uma categoria
  const removeCategory = (categoryId) => {
    setCategories(prevCategories => 
      prevCategories.filter(category => category.id !== categoryId)
    );
  };

  // Função para remover uma tarefa
  const removeTask = (categoryId, taskId) => {
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            tasks: category.tasks.filter(task => task.id !== taskId)
          };
        }
        return category;
      })
    );
  };

  // Valor do contexto com dados e funções
  const contextValue = {
    categories,
    addCategory,
    addTask,
    toggleTask,
    removeCategory,
    removeTask
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  
  if (!context) {
    throw new Error('useTaskContext deve ser usado dentro de um TaskProvider');
  }
  
  return context;
};

export default TaskContext;
