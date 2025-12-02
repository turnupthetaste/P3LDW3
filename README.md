# 📝 Gerenciador de Tarefas por Categoria

Aplicação web desenvolvida com **React Context API** para organizar tarefas de forma estruturada e intuitiva, agrupadas por categorias personalizadas.

## 📋 Descrição

O Gerenciador de Tarefas por Categoria permite ao usuário organizar suas atividades de forma eficiente. A proposta é fornecer uma experiência simples para o controle de tarefas, agrupadas por categorias como Trabalho, Estudos, Pessoal, entre outras.

## 🚀 Funcionalidades

- ✅ **Criar categorias** personalizadas (ex: Trabalho, Estudos, Casa)
- ✅ **Adicionar tarefas** dentro de cada categoria
- ✅ **Marcar tarefas como concluídas** através de checkbox
- ✅ **Visualização agrupada** por categoria
- ✅ **Indicação visual** de status (Pendente/Concluída)
- ✅ **Remover categorias e tarefas**
- ✅ **Contagem de tarefas** concluídas por categoria

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── AddCategory.jsx    # Formulário para criar nova categoria
│   ├── AddTask.jsx        # Formulário para adicionar tarefa
│   ├── CategoryList.jsx   # Exibe todas as categorias
│   └── TaskList.jsx       # Lista as tarefas de cada categoria
├── context/
│   └── TaskContext.jsx    # Contexto com dados e funções de manipulação
├── App.jsx                # Componente principal
├── App.css                # Estilos da aplicação
└── main.jsx               # Ponto de entrada
```

## 🛠️ Tecnologias Utilizadas

- React 18
- React Context API
- Vite (bundler)
- CSS3

## 📦 Instalação


1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm run dev
```

3. Acesse no navegador:
```
http://localhost:5173
```

## 🎯 Como Usar

1. **Criar uma Categoria**: Digite o nome da categoria no campo "Adicionar Nova Categoria" e clique em "Adicionar"
2. **Adicionar uma Tarefa**: Dentro de cada categoria, digite a tarefa e clique em "Adicionar"
3. **Marcar como Concluída**: Clique no checkbox ao lado da tarefa
4. **Remover**: Use os botões de remoção (✕ ou 🗑️) para excluir tarefas ou categorias

## 📚 React Context API

O projeto utiliza a Context API do React para gerenciamento de estado global:

### TaskContext
- **categories**: Array com todas as categorias e suas tarefas
- **addCategory(name)**: Adiciona nova categoria
- **addTask(categoryId, taskName)**: Adiciona tarefa a uma categoria
- **toggleTask(categoryId, taskId)**: Alterna status da tarefa (concluída/pendente)
- **removeCategory(categoryId)**: Remove uma categoria
- **removeTask(categoryId, taskId)**: Remove uma tarefa


**Prova 3 - Laboratório de Desenvolvimento Web**  
*Fatec - Faculdade de Tecnologia*
