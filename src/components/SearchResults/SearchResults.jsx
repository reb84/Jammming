import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./SearchResults.css";

const SearchResults = ({ searchQuery, searchResults, onAddTrack }) => {
  if (searchQuery && searchResults.length === 0) {
    return <p className="no-results">No results found for "{searchQuery}"</p>;
  }

  return (
    <div className="search-results-section">
      <h3 className="results-title">Search Results</h3>
      <div className="results-list">
        {searchResults.map((track) => (
          <TrackItem key={track.id} track={track} onAdd={onAddTrack} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
