import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import PlaylistSection from "./components/PlaylistSection/PlaylistSection";
import SpotifyAuth from "./utils/SpotifyAuth";
import { searchTracks } from "./utils/SpotifyAPI";
import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState("");

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

  const handleSearch = async (searchQuery) => {
    setSearchQuery(searchQuery);
    if (token) {
      const results = await searchTracks(searchQuery, token);
      setSearchResults(results);
    } else {
      console.log("No token available for search");
      setSearchResults([]);
    }
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

  return (
    <div className="App">
      <div className="container">
        <div className="app-header">
          <h1 className="app-title">musicNook</h1>
          <div className="login-btn">
            {!token ? (
              <button onClick={handleLogin}>Log into Spotify</button>
            ) : (
              <p>Logged in! Token: {token.slice(0, 20)}...</p>
            )}
          </div>

          <h3 className="app-subtitle">A cozy playlist builder for Spotify</h3>
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
