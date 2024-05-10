import React, { useRef, useState } from "react";
import { useTodo } from "./MyProvider";
import "./style.css";
function TodoItem({ todo }) {
  const [inputValue, setInputValue] = useState(todo.context);
  const inputEl = useRef();
  const { deleteTodo, updateTodo } = useTodo();
  const editTodo = () => {
    if (inputValue.trim() === "") return;
    if (inputValue.trim() !== todo.context) {
      updateTodo({
        context: inputValue,
        id: todo.id,
      });
    }
  };
  const enterInput = (e) => {
    if (e.key === "Enter") {
      editTodo();
      inputEl.current.blur();
    }
  };
  return (
    <div
      className="todo-item"
      key={todo.id}
      style={{ background: `${todo.color}` }}
    >
      <input
        className="todo-text"
        type="text"
        ref={inputEl}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={enterInput}
        onBlur={() => editTodo()}
      />
      <span onClick={() => deleteTodo(todo.id)}>X</span>
    </div>
  );
}

export default TodoItem;
