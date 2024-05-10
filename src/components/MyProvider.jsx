import React, { useState, createContext, useContext, useEffect } from "react";

const TodoContext = createContext();

export default function MyProvider({ children }) {
  const [todoList, setTodoList] = useState(false); // "light"

  //add : todo변수에 저장
  const addTodo = ({ context, color }) => {
    const todo = {
      id: Math.random().toString(36).slice(2, 13),
      context: context,
      color: color,
    };
    setTodoList((todos) => [...todos, todo]);
  };
  //delete : todo변수에 값을 지워 저장
  const deleteTodo = (id) => {
    let deletedTodoList = todoList.filter((el) => el.id !== id);
    setTodoList(deletedTodoList);
  };
  //TODO: update : todo변수에서 해당 아이디를 찾아 덮어쓰고, 그것을 storage에 저장한다.
  const updateTodo = ({ id, context }) => {
    let updateTodoList = todoList.map((el) => {
      if (el.id === id) {
        return { ...el, context };
      }
      return el;
    });
    setTodoList(updateTodoList);
  };
  //todoList가 변화시 storage에 업데이트
  useEffect(() => {
    if (todoList) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList]);
  useEffect(() => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      setTodoList(JSON.parse(todos));
    } else {
      let initTodos = "";
      localStorage.setItem("todos", JSON.stringify(initTodos));
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const { todoList, addTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  return { todoList, addTodo, deleteTodo, updateTodo };
}
