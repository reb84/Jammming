import React from "react";
import { Music, Plus, Trash2 } from "lucide-react";
import "./TrackItem.css";

const TrackItem = ({ track, onAdd, onRemove }) => {
  return (
    <div className="track-item">
      <div className="track-content">
        <div className="track-cover">
          <Music className="track-cover-icon" />
        </div>
        <div className="track-info">
          <h3 className="track-name">{track.name}</h3>
          <p className="track-artist">
            {track.artist} • {track.album}
          </p>
          <p className="track-duration">{track.duration}</p>
        </div>
      </div>
      <div className="track-action">
        <button
          onClick={() => onAdd(track)} // add track to playlist
          className="add-btn"
        >
          <Plus className="add-icon" />
        </button>
        <button
          onClick={() => onRemove(track.id)} // remove track from playlist
          className="remove-btn"
        >
          <Trash2 className="remove-icon" />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;
