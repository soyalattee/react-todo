import React, { useState } from "react";
import "./style.css";
import TodoListContainer from "./TodoListContainer";
import ColorSelector from "./ColorSelector";
import InputComponent from "./InputComponent";
import SearchComponent from "./SearchComponent";
function TodoContainer() {
  const colorArr = ["mintcream", "pink", "skyblue", "orange"];
  const [color, setColor] = useState(colorArr[0]);
  return (
    <div className="todo-container">
      <div className="left-box">
        <InputComponent color={color} />
        <ColorSelector colorArr={colorArr} setColor={setColor} />
        <TodoListContainer />
      </div>
      <div className="right-box">
        <SearchComponent />
      </div>
    </div>
  );
}

export default TodoContainer;
