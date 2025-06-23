import React from "react";
import { Music, Plus, Trash2 } from "lucide-react";
import "./TrackItem.css";

const TrackItem = ({
  track,
  onAdd,
  onRemove,
  showAddButton = true,
  showRemoveButton = false,
}) => {
  return (
    <div className="track-item">
      <div className="track-cover">img
      </div>

      <div className="track-info">
        <h3 className="track-title">{track.name}</h3>
        <p className="track-artist">
          {track.artist} • {track.album}
        </p>
        <p className="track-duration">{track.duration}</p>
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
