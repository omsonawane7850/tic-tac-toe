import React from "react";
import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, handleClick, calculateWinner, resetGame, getStatusMessage } =
    useTicTacToe();

  return (
    <div className="container">
      <div className="message">
        {getStatusMessage()}
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((cell, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={cell !== null}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
