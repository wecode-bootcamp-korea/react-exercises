import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={(e) => this.props.handleChange(e)}
      />
    );
  }
}

export default SearchBox;
