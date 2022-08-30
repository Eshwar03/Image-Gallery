import React from "react";
import { useState } from "react";
import "./styles/searchbar.css";
const Searchbar = ({ searchText }) => {
  const [search, setSearch] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    searchText(search);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="  Try searching cat.. "
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
