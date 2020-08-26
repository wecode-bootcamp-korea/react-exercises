import React from "react";
import "./Buttons.scss";

export default function Buttons({ currentIdx, idxHandler }) {
  return (
    <div className="pageBtn">
      <button data-idx="1" onClick={idxHandler}>
        1
      </button>
      <button data-idx="2" onClick={idxHandler}>
        2
      </button>
      <button data-idx="3" onClick={idxHandler}>
        3
      </button>
      <button data-idx="4" onClick={idxHandler}>
        4
      </button>
      <button data-idx="5" onClick={idxHandler}>
        5
      </button>
    </div>
  );
}
