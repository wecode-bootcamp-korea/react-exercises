import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    //const { monsters } = this.props.data;

    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
