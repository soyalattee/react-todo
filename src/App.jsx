import TodoContainer from "./components/TodoContainer";
import Myprovider from "./components/MyProvider";
import React, { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const clickOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Myprovider>
        <TodoContainer />
      </Myprovider>

      {/* <button onClick={clickOpen}>click!</button> */}
      {/* {isOpen ? <CountComponent /> : null} */}
      {/* <FocusInputButton /> */}
      {/* <PrimeCalculator /> */}
      {/* <BlinkComponent text={"텍스트 입니다"} /> */}
    </div>
  );
}

export default App;
