import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./SearchResults.css";

const SearchResults = ({ searchQuery, searchResults, onAddTrack }) => {
  if (searchQuery && searchResults.length === 0) {
    return <div>No results found for "{searchQuery}"</div>;
  }

  return (
    <div className="search-section">
      <div className="search-results">
        {searchResults.map((track) => (
          <TrackItem key={track.id} track={track} onAdd={onAddTrack} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
