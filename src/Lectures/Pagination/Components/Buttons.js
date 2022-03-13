import React from "react";
import "./Buttons.scss";

export default function Buttons({ updateOffset }) {
  return (
    <div className="pageBtn">
      <button onClick={() => updateOffset(0)}>1</button>
      <button onClick={() => updateOffset(1)}>2</button>
      <button onClick={() => updateOffset(2)}>3</button>
      <button onClick={() => updateOffset(3)}>4</button>
      <button onClick={() => updateOffset(4)}>5</button>
    </div>
  );
}
