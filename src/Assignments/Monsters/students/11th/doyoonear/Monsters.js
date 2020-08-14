/** @format */

import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import Card from "./Components/Card/Card";
import "./Monsters.scss";

class Monsters extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    const filtered = this.state.monsters.filter((el) =>
      el.name.toLowerCase().includes(this.state.userInput.toLowerCase())
    );

    return (
      <div className="Monsters">
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={this.state.monsters} filtered={filtered} />
      </div>
    );
  }
}

export default Monsters;
