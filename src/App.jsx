import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import PlaylistSection from "./components/PlaylistSection/PlaylistSection";
import "./App.css";

// Mock data
const mockSearchResults = [
  {
    id: "1",
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    preview_url: "https://example.com/preview1",
  },
  {
    id: "2",
    name: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:03",
    preview_url: "https://example.com/preview2",
  },
  {
    id: "3",
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    preview_url: "https://example.com/preview3",
  },
  {
    id: "4",
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    preview_url: "https://example.com/preview4",
  },
  {
    id: "5",
    name: "The Good Ones",
    artist: "Gabby Barrett",
    album: "Goldmine",
    duration: "3:17",
    preview_url: "https://example.com/preview5",
  },
  {
    id: "6",
    name: "Enemy",
    artist: "Imagine Dragons",
    album: "Mercury - Acts 1 & 2",
    duration: "2:53",
    preview_url: "https://example.com/preview6",
  },
  {
    id: "7",
    name: "Heartbreak on the Map",
    artist: "Ryan Hurd",
    album: "Pelago",
    duration: "3:24",
    preview_url: "https://example.com/preview7",
  },
  {
    id: "8",
    name: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "3:24",
    preview_url: "https://example.com/preview8",
  },
];

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);

    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = mockSearchResults.filter(
      (track) =>
        track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.album.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filtered);
  };

  const handleAddTrack = (track) => {
    const alreadyAdded =
      playlist.filter((playlistTrack) => playlistTrack.id === track.id).length >
      0; // check if already added

    if (!alreadyAdded) {
      setPlaylist((prev) => [...prev, track]); // add track to playlist state
    }
  };

  const handleRemoveTrack = (trackId) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== trackId));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="app-title">jammming</h1>
        </div>

        <div className="main-content">
          <SearchBar onSearch={handleSearch} />

          <SearchResults
            searchResults={searchResults}
            searchQuery={searchQuery}
            onAddTrack={handleAddTrack}
          />

          <PlaylistSection
            playlist={playlist}
            playlistName={playlistName} // playlist name
            setPlaylistName={setPlaylistName} // updated playlist name
            onRemoveTrack={handleRemoveTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
