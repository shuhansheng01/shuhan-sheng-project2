import React, { createContext, useContext, useEffect, useState } from "react";
import { generatePuzzle, isComplete } from "../utils/sudoku.js";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [size, setSize] = useState(9);
  const [puzzle, setPuzzle] = useState([]);
  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("playing");
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (status !== "playing") return;
    const id = setInterval(() => {
      setElapsed((t) => t + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [status]);

  const startNewGame = (newSize) => {
    const s = newSize ?? size;
    const { board, prefilled, solution } = generatePuzzle(s);
    setSize(s);
    setPuzzle(prefilled);
    setBoard(board);
    setSolution(solution);
    setSelected(null);
    setStatus("playing");
    setElapsed(0);
  };

  useEffect(() => {
    startNewGame(9);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetGame = () => {
    setBoard(puzzle.map((row) => row.slice()));
    setSelected(null);
    setStatus("playing");
    setElapsed(0);
  };

  const setCell = (r, c, rawValue) => {
    if (status === "won") return;
    if (!puzzle.length) return;
    if (puzzle[r][c] !== 0) return;

    const trimmed = String(rawValue).trim();
    if (trimmed === "") {
      setBoard((prev) => {
        const next = prev.map((row) => row.slice());
        next[r][c] = 0;
        return next;
      });
      return;
    }

    const num = Number(trimmed);
    if (!Number.isInteger(num)) return;
    if (num < 1 || num > size) return;

    setBoard((prev) => {
      const next = prev.map((row) => row.slice());
      next[r][c] = num;

      if (isComplete(next, size)) {
        setStatus("won");
      }

      return next;
    });
  };

  const value = {
    size,
    puzzle,
    board,
    solution,
    selected,
    status,
    elapsed,
    setSelected,
    setCell,
    startNewGame,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
}