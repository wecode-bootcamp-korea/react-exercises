import React, { Component } from "react";
import "./StateProps.scss";
import StatePropsChild from "./StatePropsChild";

const arr = [1, 2, 3, 4, 5];

class StateProps extends Component {
  constructor() {
    super();
    this.state = {
      teamA: 2,
      text: "hi",
      userInput: "",
      users: [],
    };
  }

  addA = () => {
    this.setState({ teamA: this.state.teamA + 1 });
  };
  subtractA = () => {
    this.setState({ teamA: this.state.teamA - 1 });
  };

  componentDidMount() {
    // 데이터 로딩
    //render되고 최초로 한번만 불림
    // 1. 데이터 요청: fetch()
    // 2. 요청에 대한 답변(response) 확인: console.log
    // 3. 내가 원하는 정보 state에 담는다: setState()
    // 4. render()

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // JSON Body => JS
      .then((response) => this.setState({ user: response }));
  }

  // sayHello = (e) => {
  //   this.setState({ userInput: e.target.value });
  // };

  render() {
    console.log(this.sayHello);
    return (
      <div className="state">
        <div className="state-header">{this.state.text}</div>
        <div>
          <div>
            <StatePropsChild score={this.state.teamA} />
            <input onChange={this.sayHello} type="text" />
            <div>
              <button onClick={this.addA}>+</button>
              <button onClick={this.subtractA}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StateProps;
