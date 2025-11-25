import { useMemo } from "react";
import { useGame } from "../context/GameContext.jsx";
import { isValidPlacement } from "../utils/sudoku.js";

export default function Board() {
  const { size, puzzle, board, selected, setSelected, setCell, status } =
    useGame();

  const style = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${size}, 42px)`,
      gridTemplateRows: `repeat(${size}, 42px)`,
    }),
    [size]
  );

  const { rh, cw } = size === 9 ? { rh: 3, cw: 3 } : { rh: 2, cw: 3 };

  const onInput = (r, c, e) => {
    setCell(r, c, e.target.value);
  };

  const onFocus = (r, c) => {
    setSelected({ r, c });
  };

  return (
    <div className="grid-wrap">
      <div className="board" style={style}>
        {board.map((row, r) =>
          row.map((val, c) => {
            const prefilled = puzzle[r][c] !== 0;
            const here = board[r][c];

            let valid = true;
            if (!prefilled && here !== 0) {
              valid = isValidPlacement(board, r, c, here);
            }

            const sel = selected && selected.r === r && selected.c === c;

            const showRight = c % cw === cw - 1 && c !== size - 1;
            const showBottom = r % rh === rh - 1 && r !== size - 1;
            const cellStyle = {
              borderRight: showRight ? "2px solid #222" : undefined,
              borderBottom: showBottom ? "2px solid #222" : undefined,
            };

            const classNames = [
              "cell",
              prefilled ? "prefilled" : "",
              sel ? "selected" : "",
              !valid ? "incorrect" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <input
                key={`${r}-${c}`}
                className={classNames}
                style={cellStyle}
                value={here === 0 ? "" : here}
                onChange={(e) => onInput(r, c, e)}
                onFocus={() => onFocus(r, c)}
                inputMode="numeric"
                pattern="[0-9]*"
                disabled={prefilled || status === "won"}
              />
            );
          })
        )}
      </div>
    </div>
  );
}