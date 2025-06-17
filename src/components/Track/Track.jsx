import React from "react";
import { Music } from "lucide-react";
import "./Track.css";

const Track = ({ track }) => {
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
    </div>
  );
};

export default Track;
