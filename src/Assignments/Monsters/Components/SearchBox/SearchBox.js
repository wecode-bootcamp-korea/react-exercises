import React from "react";
import "./SearchBox.scss";

function SearchBox(props) {
  const {handleChange} = props;
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
