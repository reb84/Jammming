import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import PlaylistSection from "./components/PlaylistSection/PlaylistSection";
import SpotifyAuth from "./utils/SpotifyAuth";
import { searchTracks, savePlaylistToSpotify } from "./utils/SpotifyAPI";
import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    // Check if we're returning from Spotify authorization
    if (window.location.search.includes("code=")) {
      const getToken = async () => {
        const accessToken = await SpotifyAuth.getAccessToken();
        if (accessToken) {
          setToken(accessToken);
        }
      };
      getToken();
    }
  }, []);

  const handleLogin = async () => {
    await SpotifyAuth.getAccessToken();
  };

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Set new timeout
    const newTimeout = setTimeout(async () => {
      if (token && searchQuery.trim()) {
        const results = await searchTracks(searchQuery, token);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 300); // Wait 300ms after user stops typing

    setSearchTimeout(newTimeout);
  };

  const handleAddTrack = (track) => {
    const alreadyAdded =
      playlist.filter((playlistTrack) => playlistTrack.id === track.id).length >
      0; // check if already added

    if (alreadyAdded) {
      alert("This song has already been added to your playlist");
    } else {
      setPlaylist((prev) => [...prev, track]); // add track to playlist state
    }
  };

  const handleRemoveTrack = (trackId) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== trackId));
  };

  const handleSavePlaylist = async () => {
    if (!playlistName.trim()) {
      alert("Please enter a playlist name");
      return;
    }

    if (playlist.length === 0) {
      alert("Please add some tracks to your playlist");
      return;
    }

    try {
      const result = await savePlaylistToSpotify(playlistName, playlist, token);

      if (result.success) {
        alert(result.message);
        // Optionally clear the playlist after saving
        setPlaylist([]);
        setPlaylistName("");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Failed to save playlist. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="app-header">
          <h1 className="app-title">musicNook</h1>
          <h3 className="app-subtitle">A cozy playlist builder for Spotify</h3>
          <div className="login">
            {!token ? (
              <button className="login-btn" onClick={handleLogin}>
                Log into Spotify
              </button>
            ) : (
              <p>Logged in!</p>
            )}
          </div>
        </div>

        <SearchBar onSearch={handleSearch} />
        <div className="main-content">
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
            onSavePlaylist={handleSavePlaylist} // save playlist
          />
        </div>
      </div>
      <div className="footer-container">
        Project by{" "}
        <a href="https://github.com/reb84" target="_blank" rel="noreferrer">
          Reb84
        </a>
        .
      </div>
    </div>
  );
}

export default App;
