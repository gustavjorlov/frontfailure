import React from "react";
import styled from "styled-components";

const Item = styled.p`
  text-decoration: ${props => (props.done ? `line-through` : `none`)};
`;

export default ({ todos }) => {
  return (
    <ul>
      {todos.map(item => {
        return (
          <li key={item.id}>
            <Item done={item.done}>{item.text}</Item>
          </li>
        );
      })}
    </ul>
  );
};
