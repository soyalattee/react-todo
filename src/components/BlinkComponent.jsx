import React, { useEffect, useState } from "react";
function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);
  let i = 0;
  function plusI() {
    console.log("숫자를 키워볼게요!!");
    i++;
  }
  useEffect(() => {
    const timeoutId = setInterval(() => {
      console.log("interval");
      setShowText((showText) => !showText);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);
  return (
    <div>
      {showText ? text : null}
      <p>{i}</p>
      <button onClick={plusI}>+</button>
    </div>
  );
}

export default BlinkComponent;
