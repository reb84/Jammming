import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchSection.css";

const SearchSection = ({ searchQuery, searchResults, onAddTrack }) => {
  return (
    <div className="search-section">
      <SearchBar />

      <div className="search-results">
        {searchResults.map((track) => (
          <TrackItem key={track.id} track={track} onAdd={onAddTrack} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
