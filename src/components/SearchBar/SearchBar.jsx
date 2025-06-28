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
<div className="search-container">
      <div className="search-icon">
        <Search size={20} color="#9ca3af" />
      </div>
          <input
            type="text"
            value={inputValue}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            onChange={handleChange}
            placeholder="Search for songs, artists, or albums..."
            className="search-input"
          />
        </div>



  );
};

export default SearchBar;
