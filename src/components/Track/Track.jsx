import "./Track.css";

function Track(props) {
  function addTrack() {
    alert("clicked");
  }

  return (
    <div className="Track-Container">
      <div className="Track-Info">
        <h3>{props.name}</h3>
        <p>
          {props.artist} | {props.album}
        </p>
        <button className="Track-Add" onClick={addTrack}>
          +
        </button>
      </div>
    </div>
  );
}

export default Track;
