import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    ).then((res) => res.json().then((res) => this.setState({ user: res })));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      ).then((res) => res.json().then((res) => this.setState({ user: res })));
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="url-parameters">
        <Card
          id={this.state.user.id}
          name={this.state.user.name}
          email={this.state.user.email}
        />
        <div className="btn-wrapper">
          <button onClick={() => this.props.history.push("/UrlParameters/5")}>
            Previous
          </button>
          <button onClick={() => this.props.history.push("/UrlParameters/10")}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default MonsterDetail;
