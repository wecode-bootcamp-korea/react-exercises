import React from "react";
import "./Buttons.scss";

export default function Buttons({ fetchCoffee }) {
  return (
    <div className="pageBtn">
      <button data-idx="0" onClick={fetchCoffee}>
        1
      </button>
      <button data-idx="1" onClick={fetchCoffee}>
        2
      </button>
      <button data-idx="2" onClick={fetchCoffee}>
        3
      </button>
      <button data-idx="3" onClick={fetchCoffee}>
        4
      </button>
      <button data-idx="4" onClick={fetchCoffee}>
        5
      </button>
    </div>
  );
}
