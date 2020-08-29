import React, { Component } from "react";
import "./OnChange.scss";

class OnChange extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  // 1. 콘솔로그 대신, state에 유저 인풋 값을 업데이트
  // 2. 업데이트 되는 state 객체를 콘솔에 출력

  // handleEmail = (event) => {
  //   this.setState({ email: event.target.value });
  // };

  // handlePassword = (event) => {
  //   this.setState({ password: event.target.value });
  // };

  // Mission : 기능이 비슷한 위의 두 가지를 하나로 합치기

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    //                ㄴ 계산된 속성명
  };

  render() {
    console.log(this.state);
    //항상 업데이트 된 값을 받게 된다. 이유: state가 업데이트될 때마다 render()되므로
    return (
      <div className="onchange-wrapper">
        <div className="top">
          email: <input name="email" onChange={this.handleChange} />
          password: <input name="password" onChange={this.handleChange} />
          <button>SUBMIT</button>
        </div>
        <div className="contents">
          <div>email</div>
          <div>password</div>
        </div>
      </div>
    );
  }
}

export default OnChange;
