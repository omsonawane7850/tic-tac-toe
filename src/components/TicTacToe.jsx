import React from "react";
import { useState } from "react";

const TicTacToe = () => {
  const initialBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard());

  return (
    <div className="container">
      <div className="message">
        <p>player X turn</p>
        <button className="reset-btn">Reset Game</button>
      </div>

      <div className="board">
        {board.map((_, index) => {
          return (
            <button className="cell" key={index}>
              X
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
