import React from "react";

function FirstChild() {
  return (
    <div className="firstChild">
      FirstChild
      <div>여기서 누르는 버튼이</div>
      <div className="body">
        <button onClick={() => console.log("나는 빼기")}>-</button>
        <button onClick={() => console.log("나는 더하기")}>+</button>
      </div>
    </div>
  );
}

export default FirstChild;
