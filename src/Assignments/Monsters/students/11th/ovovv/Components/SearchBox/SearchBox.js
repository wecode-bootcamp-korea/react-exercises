import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={this.props.hendleChange}
      />
    );
  }
}

export default SearchBox;
