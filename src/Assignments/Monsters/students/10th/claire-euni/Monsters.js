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

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (res => res.json())
    .then (
      (result) => {
        this.setState({
          monsters:result,
        })
      }
    )
  }

  handleChange = (e) => {
  this.setState({userInput: e.target.value});
}

  render() {
  const{monsters, userInput} = this.state;
  const matchingName = monsters.filter((el) => el.name.toLowerCase().includes(userInput));
    
  return (
      <div className="Monsters">
        <h1>컴포넌트 재사용 연습!</h1>
        <div className="state">
      </div>
      <SearchBox handleChange={this.handleChange} /> 
     <CardList monsters={matchingName} />
      </div>
    );
  }
}

export default Monsters;
