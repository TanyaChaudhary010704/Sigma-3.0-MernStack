import { useState } from "react";

const LudoBoard = () => {
  //useState using object
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let updateBlue = () => {
    // moves.blue += 1;
    setMoves((prevMoves) =>{
      return{...prevMoves, blue: moves.blue + 1}
    });
  };
  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Red moves={moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
        <p>Yellow moves={moves.yellow}</p>
        <button style={{ backgroundColor: "#B87C1C" }}>+1</button>
        <p>Green moves={moves.green}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
      </div>
    </div>
  );
};

export default LudoBoard;
