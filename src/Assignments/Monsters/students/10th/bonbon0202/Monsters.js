import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

class Monsters extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          monsters: json,
        });
      });
  }

  render() {
    let { monsters, userInput } = this.state;

    const sortedMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(userInput.toLowerCase());
    });

    return (
      <div className="Monsters">
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox
          handleChange={(e) => {
            this.setState({ userInput: e.target.value });
          }}
        />
        <CardList monsters={sortedMonsters} />
      </div>
    );
  }
}

export default Monsters;
