import React, { Component } from "react";

class FirstChild extends Component {
  render() {
    return (
      <div className="first-child">
        FirstChild
        <div>여기서 누르는 버튼이</div>
        <div className="body">
          <button onClick={() => console.log("나는 빼기")}>-</button>
          <button onClick={() => console.log("나는 더하기")}>+</button>
        </div>
      </div>
    );
  }
}

export default FirstChild;
