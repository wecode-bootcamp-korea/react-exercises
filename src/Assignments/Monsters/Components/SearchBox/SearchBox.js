import React from "react";
import "./SearchBox.scss";

function SearchBox({ userInput, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      value={userInput}
      onChange={handleChange}
    />
  );
}

export default SearchBox;
