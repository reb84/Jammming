import React, { useState } from "react";
import SearchSection from "./components/SearchSection/SearchSection";
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
];

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const handleAddTrack = (track) => {
    const alreadyAdded =
      playlist.filter((playlistTrack) => playlistTrack.id === track.id).length >
      0;

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
          <SearchSection
            searchResults={mockSearchResults}
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
