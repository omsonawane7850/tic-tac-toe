import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);

  const [score, setScore] = useState({
    X: 0,
    O: 0,
    draw: 0,
  });

  const [winningCells, setWinningCells] = useState([]);

  const calculateWinner = (currBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];

      if (
        currBoard[a] &&
        currBoard[a] === currBoard[b] &&
        currBoard[a] === currBoard[c]
      ) {
        return {
          winner: currBoard[a],
          winningCells: [a, b, c],
        };
      }
    }

    return null;
  };

  const handleClick = (index) => {
    // Already filled cell
    if (board[index]) {
      return;
    }

    // Copy board
    const newBoard = [...board];

    // Add X or O
    newBoard[index] = isNext ? "X" : "O";

    // Check winner AFTER the move
    const result = calculateWinner(newBoard);

    setBoard(newBoard);

    if (result) {
      setWinningCells(result.winningCells);

      setScore((prev) => ({
        ...prev,
        [result.winner]: prev[result.winner] + 1,
      }));

      return;
    }

    // Check draw
    if (!newBoard.includes(null)) {
      setScore((prev) => ({
        ...prev,
        draw: prev.draw + 1,
      }));

      return;
    }

    // Change turn
    setIsNext((prev) => !prev);
  };

  const getStatusMessage = () => {
    const result = calculateWinner(board);

    if (result) {
      return `Player ${result.winner} wins! 🏆`;
    }

    if (!board.includes(null)) {
      return "It's a draw! 🤝";
    }

    return `Player ${isNext ? "X" : "O"} turn`;
  };

  // New round - score remains
  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
    setWinningCells([]);
  };

  // Complete reset - score also becomes 0
  const resetScore = () => {
    setBoard(initialBoard());
    setIsNext(true);
    setWinningCells([]);

    setScore({
      X: 0,
      O: 0,
      draw: 0,
    });
  };

  return {
    board,
    score,
    winningCells,
    handleClick,
    getStatusMessage,
    resetGame,
    resetScore,
  };
};

export default useTicTacToe;
