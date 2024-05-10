import React, { useRef, useState } from "react";
import "./style.css";
function FocusInputButton() {
  // 다른 element를 참조해야 할때 사용
  const inputRef = useRef();
  const [value, setValue] = useState(0);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const getInput = () => {
    console.log(inputRef.current);
    return inputRef.current;
  };
  return (
    <div className="hello-world">
      <button onClick={focusInput}>입력하러가기</button>
      <button onClick={getInput}>게또</button>
      <div style={{ height: 2000 }}></div>
      <input ref={inputRef} type="text"></input>
      <div style={{ height: 2000 }}></div>
    </div>
  );
}

export default FocusInputButton;
