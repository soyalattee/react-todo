import React, { useState } from "react";
import { useTodo } from "./MyProvider";

export default function SearchComponent() {
  const [inputValue, setInputValue] = useState("");
  const { todoList } = useTodo();
  const [searchedList, setSearchedList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showEmptyText, setShowEmptyText] = useState();

  const searchTodo = () => {
    if (inputValue.trim() === "") return;
    let searchingList = todoList.filter((todo) => {
      return todo.context.includes(inputValue);
    });
    setSearchedList(searchingList);
    if (searchingList.length === 0) {
      setShowEmptyText(`찾는 내용 '${inputValue}' 이 없어요!`);
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setShowEmptyText("");
    }
    setInputValue("");
  };

  const enterInput = (e) => {
    if (e.key === "Enter") {
      searchTodo();
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-box">
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={enterInput}
        ></input>
        <button onClick={searchTodo}>검색</button>
      </div>
      <div className="search-list-box todo-list-container">
        {!isEmpty &&
          searchedList &&
          searchedList.map((item, idx) => {
            return (
              <div
                className="todo-item"
                key={idx}
                style={{ background: item.color }}
              >
                {item.context}
              </div>
            );
          })}
        {isEmpty && <div>{showEmptyText}</div>}
      </div>
    </div>
  );
}
