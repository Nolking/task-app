import React, { useState } from "react";
import { SearchIcon } from "./Icons";
import { StyledInput } from "./index.js";

// eslint-disable-next-line react/prop-types
const MySearchBar = ({ onSearch, className}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        onSearch(search);
    }
    };
  return (
    <div className={`search-bar ${className}`}>
      <a onClick={() => onSearch(search)}>
        <SearchIcon />
      </a>
      <StyledInput
        type="text"
        placeholder="Search by task name"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default MySearchBar;
