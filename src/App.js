import React, { useState, useEffect } from "react";
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

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos([
      { id: 1, label: "Hej" },
      { id: 2, label: "Hå" },
      { id: 3, label: "I" },
      { id: 4, label: "Lingonskogen" }
    ]);
  }, []);
  return (
    <TodoContext.Provider value={todos}>
      <AppGrid>
        <Header>header</Header>
        <Sidebar>
          <TodoFilter />
        </Sidebar>
        <Main>
          <AddTodo
            onTodoAdded={newTodo => {
              setTodos([...todos, newTodo]);
            }}
          />
          <TodoList todos={todos} />
        </Main>
        <Footer>footer</Footer>
      </AppGrid>
    </TodoContext.Provider>
  );
}

export default App;
