import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import { Search, Music } from "lucide-react";
import "./SearchResults.css";

const SearchResults = ({ searchQuery, searchResults, onAddTrack }) => {
  // no search query entered yet
  if (!searchQuery) {
    return (
      <div className="empty-state">
        <Search size={44} color="#4b5563" />
        <p className="empty-state-text">
          Log in to Spotify and start searching to find some music
        </p>
      </div>
    );
  }

  if (searchQuery && searchResults.length === 0) {
    // search but no results
    return (
      <div className="empty-state">
        <Music size={64} color="#4b5563" />
        <p className="empty-state-text">
          No results found for "{searchQuery}.<br />
          Are you logged in to Spotify?"
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="section-title">Search Results</h2>
      <div className="track-list">
        {searchResults.map((track) => (
          <TrackItem key={track.id} track={track} onAdd={onAddTrack} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
