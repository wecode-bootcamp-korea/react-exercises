import React from "react";
// import { Link, useLocation } from "react-router-dom";
import "./Buttons.scss";

export default function Buttons({ updateOffset }) {
  // const query = URLSearchParams(useLocation().search);

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
