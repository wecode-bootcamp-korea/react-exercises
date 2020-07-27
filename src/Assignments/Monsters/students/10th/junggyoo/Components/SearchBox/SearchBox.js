import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
