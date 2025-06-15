import Track from "../Track/Track";
import "./Tracklist.css";

function Tracklist() {
  return (
    <div className="Tracklist-Container">
      <Track name="Blinding Lights" artist="The Weeknd" album="After Hours" />
      <Track name="Pink Bling" artist="Dua Lipa" album="Future Perfect" />
      <Track name="Always" artist="Bon Jovi" album="Crossroad" />
      <Track name="Barbie Girl" artist="Aqua" album="Superhero" />
    </div>
  );
}

export default Tracklist;
