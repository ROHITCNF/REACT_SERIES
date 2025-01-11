import React from "react";
import { useState } from "react";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  console.log("Search Component rendered");

  const handleSearchButtonClick = () => {
    console.log(searchText);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button onClick={handleSearchButtonClick}>search</button>
    </div>
  );
};
export default Search;
