import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

class Monsters extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      userInput: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => this.setState({ monsters: response }));
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { monsters, userInput } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(userInput).toLowerCase()
    );

    return (
      <div className="Monsters">
        <h1>컴포넌트 재사용 연습</h1>
        <SearchBox
          handleChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default Monsters;
