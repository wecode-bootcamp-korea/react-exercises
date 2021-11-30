import React from "react";
import "./SearchBox.scss";

function SearchBox({ handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
}

export default SearchBox;
