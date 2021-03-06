import React from "react";

export default ({ todos }) => {
  return (
    <ul>
      {todos.map(item => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};
