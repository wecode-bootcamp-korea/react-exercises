import React, { Component } from 'react';
import SearchBox from './Components/SearchBox/SearchBox';
import CardList from './Components/CardList/CardList';
import './Monsters.scss';

class Monsters extends Component {
  state = {
    monsters: [],
    userInput: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((result) => this.setState({ monsters: result }));
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  render() {
    const filterMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.userInput.toLowerCase());
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
