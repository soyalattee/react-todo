import React from "react";
import "./style.css";
import { useTodo } from "./MyProvider";
import TodoItem from "./TodoItem";
function TodoListContainer() {
  const { todoList } = useTodo();

  return (
    <div className="todo-list-container">
      {todoList && todoList.map((todo, i) => <TodoItem key={i} todo={todo} />)}
    </div>
  );
}

export default TodoListContainer;
