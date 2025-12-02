import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskList';

const CategoryList = () => {
  const { categories, removeCategory } = useTaskContext();

  // Função para escolher ícone baseado no nome da categoria
  const getCategoryIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('trabalho')) return '💼';
    if (lowerName.includes('estudo')) return '📚';
    if (lowerName.includes('casa')) return '🏠';
    if (lowerName.includes('pessoal')) return '👤';
    if (lowerName.includes('saúde') || lowerName.includes('saude')) return '❤️';
    if (lowerName.includes('compra')) return '🛒';
    if (lowerName.includes('lazer')) return '🎮';
    if (lowerName.includes('viagem')) return '✈️';
    return '📌';
  };

  if (categories.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <p className="empty-title">Nenhuma categoria criada ainda.</p>
        <p className="empty-subtitle">
          Adicione uma categoria para começar a organizar suas tarefas!
        </p>
      </div>
    );
  }

  return (
    <div className="category-list">
      {categories.map(category => {
        const completedCount = category.tasks.filter(t => t.completed).length;
        const totalCount = category.tasks.length;
        
        return (
          <div key={category.id} className="category-card">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">{getCategoryIcon(category.name)}</span>
                {category.name}
              </h3>
              
              <div className="category-actions">
                {totalCount > 0 && (
                  <span className="task-counter">
                    {completedCount}/{totalCount} concluídas
                  </span>
                )}
                <button
                  onClick={() => removeCategory(category.id)}
                  className="btn-remove-category"
                  title="Remover categoria"
                >
                  🗑️
                </button>
              </div>
            </div>
            
            <AddTask categoryId={category.id} />
            
            <div className="category-tasks">
              <TaskList categoryId={category.id} tasks={category.tasks} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
