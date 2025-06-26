import React from "react";
import { Plus, Trash2 } from "lucide-react";
import "./TrackItem.css";

const TrackItem = ({
  track,
  onAdd,
  onRemove,
  showAddButton = true,
  showRemoveButton = false,
}) => {
  // Format duration from milliseconds to MM:SS
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="track-item">
      <div className="track-cover">
        {track.image ? (
          <img
            src={track.image}
            alt={`${track.album} cover`}
            className="cover-image"
          />
        ) : (
          <div className="cover-placeholder">♪</div>
        )}
      </div>
      <div className="track-info">
        <h3 className="track-title">{track.name}</h3>
        <p className="track-artist">
          {track.artist} • {track.album}
        </p>
        <p className="track-duration">{formatDuration(track.duration_ms)}</p>
      </div>
      <div className="track-action">
        {showAddButton && (
          <button
            onClick={() => onAdd(track)} // add track to playlist
            className="action-btn add-btn"
          >
            <Plus className="action-icon" />
          </button>
        )}
        {showRemoveButton && (
          <button
            onClick={() => onRemove(track.id)} // remove track from playlist
            className="action-btn remove-btn"
          >
            <Trash2 className="action-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TrackItem;
