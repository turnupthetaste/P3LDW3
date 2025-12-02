import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const { addCategory } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (categoryName.trim()) {
      addCategory(categoryName);
      setCategoryName('');
    }
  };

  return (
    <div className="add-category">
      <h2>Adicionar Nova Categoria</h2>
      <form onSubmit={handleSubmit} className="add-category-form">
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Ex: Trabalho, Estudos, Casa..."
          className="input-field"
        />
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
