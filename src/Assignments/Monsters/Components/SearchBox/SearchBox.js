import React from "react";
import "./SearchBox.scss";

const SearchBox = ({ handleChange, searchMonsters }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default SearchBox;
