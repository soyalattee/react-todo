import React from "react";
import "./style.css";
function ColorSelector({ colorArr, setColor }) {
  const clickColor = (colorValue) => {
    console.log(colorValue);
    setColor(colorValue);
  };
  return (
    <div className="color-selector">
      {colorArr &&
        colorArr.map((color, idx) => {
          return (
            <div
              key={idx}
              className={`color-item ${color}`}
              onClick={() => clickColor(color)}
              style={{ background: color }}
            ></div>
          );
        })}
    </div>
  );
}

export default ColorSelector;
