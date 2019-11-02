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
      { id: 1, text: "Hej", done: false },
      { id: 1, text: "Och", done: true },
      { id: 2, text: "Hå", done: false },
      { id: 3, text: "I", done: false },
      { id: 4, text: "Lingonskogen", done: true }
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
