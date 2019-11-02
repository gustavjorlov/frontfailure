import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import AddTodo from "./components/AddTodo";
import { TodoContext } from "./contexts";

const AppGrid = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  max-width: 1000px;
  margin: 0px auto;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 250px auto 100px;
`;
const Header = styled.div`
  grid-area: header;
  border-bottom: 1px solid #888;
`;
const Sidebar = styled.div`
  grid-area: sidebar;
  min-height: 400px;
`;
const Main = styled.div`
  grid-area: main;
`;
const Footer = styled.div`
  grid-area: footer;
  border-bottom: 1px solid #888;
`;

export const appendUniqueTodo = (todoList, todoItem) => {
  return todoList.find(item => item.id === todoItem.id) ||
    todoList.find(item => item.text === todoItem.text)
    ? todoList
    : [...todoList, todoItem];
};

const App = () => {
  const [todos, setTodos] = useState(localStorage.getItem("todos") || []);
  const [filter, setFilter] = useState("all");

  const getFilteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter(todo => !todo.done);
      case "done":
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  };

  const toggleTodo = todo => {
    setTodos(todos.map(t => (t.id === todo.id ? { ...t, done: !t.done } : t)));
  };

  return (
    <TodoContext.Provider value={todos}>
      <AppGrid>
        <Header>header</Header>
        <Sidebar>
          <TodoFilter filter={filter} onSelect={setFilter} />
        </Sidebar>
        <Main>
          <AddTodo
            onTodoAdded={newTodo => {
              setTodos(appendUniqueTodo(todos, newTodo));
            }}
          />
          <TodoList todos={getFilteredTodos()} onToggleTodo={toggleTodo} />
        </Main>
        <Footer>footer</Footer>
      </AppGrid>
    </TodoContext.Provider>
  );
};

export default App;
