import React from "react";
import styled from "styled-components";

const ItemText = styled.p`
  text-decoration: ${props => (props.done ? `line-through` : `none`)};
  margin: 0px;
`;

const List = styled.ul`
  padding-left: 0px;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 10px;
  width: 200px;
  margin: 10px 0px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => (props.done ? `#eeffee` : `#ffeeee`)};
  position: relative;
  text-align: center;
  transition: 0.2s;
  &:hover {
    transform: translate(10px, 0px);
  }
  &:active {
    transform: translate(10px, -5px);
  }
`;

export default ({ todos, onToggleTodo }) => {
  return (
    <List>
      {todos.map(item => {
        return (
          <ListItem
            done={item.done}
            key={item.id}
            onClick={onToggleTodo.bind(null, item)}
          >
            <ItemText done={item.done}>{item.text}</ItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
