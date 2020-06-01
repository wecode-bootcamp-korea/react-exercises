import React, { Component } from "react";

class SecondChild extends Component {
  render() {
    return (
      <div className="second-child">
        SecondChild
        <div>여기 내용을 변경해야 할 때</div>
        <div className="body">{this.props.num}</div>
      </div>
    );
  }
}

export default SecondChild;
