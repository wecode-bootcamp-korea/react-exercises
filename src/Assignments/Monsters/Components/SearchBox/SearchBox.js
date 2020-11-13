import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchedMonsters: [],
      monsters: [],
    };
  }

  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder="Search..."
        onChange={this.props.handleChange}
        // value={this.props.searchKeyword}
      />
    );
  }
}

export default SearchBox;
