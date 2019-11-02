import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin-top: 16px;
  margin-left: 16px;
`;

export default ({ onTodoAdded }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <Input
        type="text"
        placeholder="What's to do?"
        onChange={e => {
          setTodoText(e.target.value);
        }}
        value={todoText}
      ></Input>
      <Button
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
      </Button>
    </div>
  );
};
