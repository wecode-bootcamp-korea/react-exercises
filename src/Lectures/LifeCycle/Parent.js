import React, { useState, useEffect } from "react";
import Child from "./Child";
import "./Parent.scss";

export default function Parent() {
  const [parentCount, setParentCount] = useState(0);

  useEffect(() => {});

  const updateCount = () => {
    setParentCount(parentCount + 1);
  };

  return (
    <div className="parent">
      <div>
        <p>parent</p>
        <p>Count: {parentCount}</p>
        <button onClick={updateCount}>parent plus</button>
      </div>
      <Child />
    </div>
  );
}
