import React, { useState } from "react";

export default ({ onTodoAdded }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="What's to do?"
        onChange={e => {
          setTodoText(e.target.value);
        }}
        value={todoText}
      ></input>
      <button
        disabled={todoText === ""}
        onClick={() => {
          onTodoAdded({
            id: `id_${Math.round(Math.random() * 1000)}`,
            text: todoText,
            done: false
          });
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
};
