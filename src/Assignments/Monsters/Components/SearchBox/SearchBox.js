import React from "react";
import "./SearchBox.scss";

function SearchBox({ onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={onChange}
    />
  );
}

export default SearchBox;
