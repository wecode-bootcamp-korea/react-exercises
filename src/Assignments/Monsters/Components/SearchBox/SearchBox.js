import React from "react";
import "./SearchBox.scss";

function SearchBox({handleChange, userInput}) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={handleChange}
      value={userInput}
    />
  );
}

export default SearchBox;
