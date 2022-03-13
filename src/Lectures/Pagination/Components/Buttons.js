import React from "react";
import "./Buttons.scss";

export default function Buttons({ updateOffset }) {
  return (
    <div className="pageBtn">
      {[0, 1, 2, 3, 4].map((page) => {
        return <button onClick={() => updateOffset(page)}>{page + 1}</button>;
      })}
    </div>
  );
}
