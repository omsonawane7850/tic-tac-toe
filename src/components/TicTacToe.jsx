import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const {
    board,
    score,
    winningCells,
    handleClick,
    getStatusMessage,
    resetGame,
    resetScore,
  } = useTicTacToe();

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      {/* Scoreboard */}
      <div className="scoreboard">
        <div>
          <span>Player X</span>
          <strong>{score.X}</strong>
        </div>

        <div>
          <span>Draw</span>
          <strong>{score.draw}</strong>
        </div>

        <div>
          <span>Player O</span>
          <strong>{score.O}</strong>
        </div>
      </div>

      {/* Status */}
      <div className="message">{getStatusMessage()}</div>

      {/* Board */}
      <div className="board">
        {board.map((cell, index) => {
          return (
            <button
              className={`cell ${
                winningCells.includes(index) ? "winning-cell" : ""
              }`}
              key={index}
              onClick={() => handleClick(index)}
              disabled={cell !== null || winningCells.length > 0}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="reset-btn" onClick={resetGame}>
          New Round
        </button>

        <button className="reset-btn danger" onClick={resetScore}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
