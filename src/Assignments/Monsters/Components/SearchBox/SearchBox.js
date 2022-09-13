import React from "react";
import "./SearchBox.scss";

function SearchBox(props) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      value={props.userInput}
      onChange={props.handleChange}
    />
  );
}

export default SearchBox;
