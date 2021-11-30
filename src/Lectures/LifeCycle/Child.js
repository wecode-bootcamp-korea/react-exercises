import React, { useState, useEffect } from "react";
import "./Child.scss";

export default function Child() {
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {});

  const updateCount = () => {
    setChildCount(childCount + 1);
  };

  return (
    <div className="child">
      <div>
        <p>Child!</p>
        <p>Count: {childCount}</p>
        <button onClick={updateCount}>child plus</button>
      </div>
    </div>
  );
}
