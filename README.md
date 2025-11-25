
# Sudoku+ — React (HW2)

Single-player Sudoku built with **React + React Router + Context API**.
- Two modes: **Easy (6×6)** and **Normal (9×9)**
- Random puzzle each visit (28–30 clues for 9×9; ~18 clues for 6×6)
- Cell states: unselected / selected / incorrect / hover
- Timer, New Game, Reset
- Validation + range limits (1–6 / 1–9)
- No uniqueness guarantee required for core rubric

## Quickstart
```bash
npm i
npm run dev
```

## Deploy (Render)
- Build: `npm run build` → deploy `dist/` as Static Site

## Structure
- `src/context/GameContext.jsx` — global state (Context)
- `src/utils/sudoku.js` — generator, validator, solver
- `src/components/Board.jsx` — editable grid
- `src/pages/*` — routes per rubric
