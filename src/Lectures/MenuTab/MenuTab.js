import React, { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./MenuTab.scss";

//변하는 값이 아니기 때문에 클래스 밖에서 변수 선언
const obj = {
  1: <First />,
  2: <Second />,
  3: <Third />,
};
//조건문 대신 객체로 매핑!

const arr = ["First", "Second", "Third"];

export default class MenuTab extends Component {
  state = {
    activeTab: 1,
  };

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    console.log(this.state.activeTab);
    return (
      <div className="wrapper">
        <ul className="tabs">
          {/* <li onClick={() => this.handleClick(1)}>First</li>
          <li onClick={() => this.handleClick(2)}>Second</li>
          <li onClick={() => this.handleClick(3)}>Third</li> */}
          {/* ==> map함수로 변경 */}
          {arr.map((str, idx) => {
            return (
              <li key={str} onClick={() => this.handleClick(idx + 1)}>
                {str}
              </li>
            );
          })}
        </ul>
        <div className="contents">{obj[this.state.activeTab]}</div>
      </div>
    );
  }
}
