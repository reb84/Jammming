import { useState } from "react";
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
    <div className="SearchBar">
      <input
        type="text"
        value={inputValue}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        onChange={handleChange}
        placeholder="Get Jammming..."
      />
      <button className="SearchButton" onClick={handleSubmit}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
