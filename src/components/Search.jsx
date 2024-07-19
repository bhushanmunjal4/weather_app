import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <FaSearch color="#8b8b8b" size={15} />
        </button>
      </form>
    </div>
  );
};

export default Search;
