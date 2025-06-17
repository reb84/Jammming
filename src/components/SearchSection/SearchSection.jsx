import React from "react";
import Track from "../Track/Track";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchSection.css";

const SearchSection = ({ searchQuery, searchResults }) => {
  return (
    <div className="search-section">
      <SearchBar />

      <div className="search-results">
        {searchResults.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
