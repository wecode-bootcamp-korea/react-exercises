import React from "react";
import "./SearchBox.scss";

function SearchBox(props) {
  return (
    <input
      name="userInput"
      className="search"
      type="search"
      placeholder="Search..."
      onChange={props.handleChange}
    />
  );
}

export default SearchBox;
