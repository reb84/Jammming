import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import { Music, Save } from "lucide-react";
import "./PlaylistSection.css";

const PlaylistSection = ({
  playlist,
  onRemoveTrack,
  playlistName,
  setPlaylistName,
}) => {
  return (
    <div className="playlist-section">
      <div className="playlist-header">
        <h2 className="playlist-title">
          {playlistName ? playlistName : "Your Playlist"}
        </h2>

        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="name-input"
          placeholder="Enter playlist name..."
          maxlength="50"
        />
      </div>

      <div className="playlist-tracks">
        {playlist.length > 0 ? (
          // maps through each track in playlist
          playlist.map((track, index) => (
            <div key={`${track.id}-${index}`} className="playlist-track-item">
              <TrackItem
                track={track} // track data
                onRemove={onRemoveTrack} // remove track
                showAddButton={false}
                showRemoveButton={true}
              />
            </div>
          ))
        ) : (
          // empty playlist
          <div className="empty-playlist">
            <Music className="empty-icon" />
            <p className="empty-text">Your playlist is empty</p>
          </div>
        )}
      </div>

      {playlist.length > 0 && (
        <button
          onClick={() => alert("Your playlist has been saved!")}
          className="save-btn"
        >
          <Save className="save-icon" />
          Save to Spotify
        </button>
      )}
    </div>
  );
};

export default PlaylistSection;
