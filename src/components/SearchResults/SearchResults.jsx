import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import { Music } from "lucide-react";
import "./SearchResults.css";

const SearchResults = ({ searchQuery, searchResults, onAddTrack }) => {
  // no search query entered yet
  if (!searchQuery) {
    return (
      <div className="search-results-section">
        <h3 className="results-title">Search Results</h3>
        <div className="empty-search">
          <Music className="empty-search-icon" />
          <p className="empty-search-text">Get searching to find some music</p>
        </div>
      </div>
    );
  }

  if (searchQuery && searchResults.length === 0) {
    // search but no results
    return (
      <div className="search-results-section">
        <h3 className="results-title">Search Results</h3>
        <p className="no-results">No results found for "{searchQuery}"</p>
      </div>
    );
  }

  return (
    // no search and results
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
