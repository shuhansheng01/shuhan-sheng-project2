import { useEffect } from "react";
import { useGame } from "../context/GameContext.jsx";
import Board from "../components/Board.jsx";

export default function GamePage({ size }) {
  const { size: currentSize, startNewGame, resetGame, elapsed, status } =
    useGame();

  useEffect(() => {
    if (currentSize !== size) {
      startNewGame(size);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const seconds = String(elapsed % 60).padStart(2, "0");

  return (
    <section className="page game-page">
      <h2>{size === 6 ? "Easy Sudoku (6×6)" : "Normal Sudoku (9×9)"}</h2>
      <p className="timer">
        Timer: {minutes}:{seconds}
      </p>
      <Board />
      {status === "won" && (
        <p className="congrats">Congratulations! You solved the puzzle 🎉</p>
      )}
      <div className="game-actions">
        <button className="btn primary" onClick={() => startNewGame(size)}>
          New Game
        </button>
        <button className="btn" onClick={resetGame}>
          Reset
        </button>
      </div>
      <p className="helper-text">
        Only numbers 1–{size} are allowed. Incorrect placements turn red.
      </p>
    </section>
  );
}