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
      <h3 className="searchbar-title">Get searching...</h3>
      <div className="search-form">
        <div className="search-input-container">
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
          <Search className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
