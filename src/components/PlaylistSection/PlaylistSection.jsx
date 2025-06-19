import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./PlaylistSection.css";

const PlaylistSection = ({ playlist }) => {
  return (
    <div className="playlist-section">
      <h2 className="playlist-title">Your Playlist</h2>

      <div className="playlist-tracks">
        {playlist.length > 0 ? (
          // ↓ This maps through each track in the playlist
          playlist.map((track, index) => (
            <div key={`${track.id}-${index}`} className="playlist-track-item">

              <TrackItem
                track={track} // track data
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
    </div>
  );
};

export default PlaylistSection;
