import React, { useState } from "react";
import { useTodo } from "./MyProvider";

export default function InputComponent({ color }) {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodo();
  const insertTodo = () => {
    if (inputValue.trim() === "") return;
    addTodo({
      context: inputValue,
      color: color,
    });
    setInputValue("");
  };
  const enterInput = (e) => {
    if (e.key === "Enter") {
      insertTodo();
    }
  };
  return (
    <div className="input-box">
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={enterInput}
        style={{ background: color }}
      ></input>
      <button onClick={insertTodo}>등록</button>
    </div>
  );
}
