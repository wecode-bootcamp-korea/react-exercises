import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <input
        className="search"
        type="search"
        placeholder="이름 검색"
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
