import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

class Monsters extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  }
  // SearchBox에 props로 넘겨줄 handleChange 메소드 정의
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  // 필터링 로직
  render() {
    const filterMonster = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.userInput.toLowerCase());
    });

    return (
      <div className="Monsters">
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default Monsters;
