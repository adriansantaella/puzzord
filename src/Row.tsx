import Tile from "./Tile";

function Row({guess}) {

  return (
    <div className="pw-row">
      { guess.map((letter, index) => <Tile letter={letter} status="entry" key={index} />) }
    </div>
  );
}

export default Row;
