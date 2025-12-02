import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            📝 Gerenciador de Tarefas por Categoria
          </h1>
          <p className="app-subtitle">
            Organize suas atividades de forma estruturada e intuitiva
          </p>
        </header>
        
        <main className="app-main">
          <AddCategory />
          <CategoryList />
        </main>
        
        <footer className="app-footer">
          <p>Desenvolvido com React Context API</p>
          <p>Prova 3 - Laboratório de Desenvolvimento Web</p>
        </footer>
      </div>
    </TaskProvider>
  );
}

export default App;
