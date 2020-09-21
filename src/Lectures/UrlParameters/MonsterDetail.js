import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      )
        .then((res) => res.json())
        .then((res) => this.setState({ data: res }));
    }
  }

  render() {
    // console.log("data :", this.state.data);
    console.log("match :", this.props);
    return (
      <div className="url-parameters">
        <div className="btn-wrapper">
          <button>Back to Monsters List</button>
        </div>
        <Card
          id={this.state.data.id}
          name={this.state.data.name}
          email={this.state.data.email}
        />
        <div className="btn-wrapper">
          <button
            onClick={() =>
              this.props.history.push(
                `/monsters/detail/${this.props.match.params.id - 1}`
              )
            }
          >
            Previous
          </button>
          <button
            onClick={() =>
              this.props.history.push(
                `/monsters/detail/${+this.props.match.params.id + 1}`
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default MonsterDetail;
