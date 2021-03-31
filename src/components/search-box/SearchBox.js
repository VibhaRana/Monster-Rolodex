import React from "react";
import "./searchBox.css";

function SearchBox({ placeholder, handleChange }) {
  // destructure props from App component

  return (
    <div className="searchBox">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
