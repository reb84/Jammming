import { useState } from "react";
import { Search } from "lucide-react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="searchbar-section">
      <h2 className="search-title">Search Spotify</h2>

      <div className="search-form">
        <div className="search-input-container">
          <Search className="search-icon" />
          <input
            type="text"
            value={inputValue}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            onChange={handleChange}
            placeholder="Search for songs, artists, or albums..."
            className="search-input"
          />
        </div>
        <button onClick={handleSubmit} className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
