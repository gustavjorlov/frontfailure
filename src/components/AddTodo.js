import React from "react";

export default ({ onTodoAdded }) => {

  // use state to give todo label. And invent a uniqu id
  return (
    <div>
      <input type="text" placeholder="What's to do?"></input>
      <button onClick={onTodoAdded}>Add</button>
    </div>
  );
};
