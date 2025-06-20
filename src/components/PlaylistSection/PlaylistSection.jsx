import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./PlaylistSection.css";

const PlaylistSection = ({
  playlist,
  onRemoveTrack,
  playlistName,
  setPlaylistName,
}) => {
  return (
    <div className="playlist-section">
      <div className="playlist-name">
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Enter playlist name..."
        />
      </div>
      <h2 className="playlist-title">
        {playlistName ? playlistName : "Your Playlist"}
      </h2>
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
            <p className="empty-text">Your playlist is empty</p>
          </div>
        )}
      </div>
      <button className="save-btn" onClick={() => alert("Button was clicked!")}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default PlaylistSection;
