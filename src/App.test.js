import { appendUniqueTodo } from "./App";

describe("appendUniqueTodo", () => {
  const todoList = [
    { id: 1, text: "one", done: true },
    { id: 2, text: "two", done: false },
    { id: 3, text: "three", done: false }
  ];
  test("should append todo", () => {
    expect(
      appendUniqueTodo(todoList, { id: 4, text: "four", done: false })
    ).toHaveLength(4);
  });
  test("should not append todo if id already present", () => {
    expect(
      appendUniqueTodo(todoList, { id: 3, text: "four", done: false })
    ).toHaveLength(3);
  });
  test("should not append todo if text already present", () => {
    expect(
      appendUniqueTodo(todoList, { id: 4, text: "three", done: false })
    ).toHaveLength(3);
  });
});
