function subgridSize(n) {
  if (n === 9) return { rh: 3, cw: 3 };
  if (n === 6) return { rh: 2, cw: 3 };
  throw new Error("Unsupported size");
}

export function isValidPlacement(board, r, c, value) {
  const size = board.length;
  if (value === 0) return true;

  for (let i = 0; i < size; i++) {
    if (i !== c && board[r][i] === value) return false;
  }

  for (let i = 0; i < size; i++) {
    if (i !== r && board[i][c] === value) return false;
  }

  const { rh, cw } = subgridSize(size);
  const rs = Math.floor(r / rh) * rh;
  const cs = Math.floor(c / cw) * cw;

  for (let i = 0; i < rh; i++) {
    for (let j = 0; j < cw; j++) {
      const rr = rs + i;
      const cc = cs + j;
      if ((rr !== r || cc !== c) && board[rr][cc] === value) {
        return false;
      }
    }
  }

  return true;
}

export function isComplete(board, size) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const v = board[r][c];
      if (v === 0) return false;
      if (!isValidPlacement(board, r, c, v)) return false;
    }
  }
  return true;
}

function clone(board) {
  return board.map((row) => row.slice());
}

function createEmpty(size) {
  return Array.from({ length: size }, () => Array(size).fill(0));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateSolvedBoard(size) {
  const board = createEmpty(size);
  const numbers = Array.from({ length: size }, (_, i) => i + 1);

  function findEmptyCell() {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === 0) return [r, c];
      }
    }
    return null;
  }

  function backtrack() {
    const spot = findEmptyCell();
    if (!spot) return true;

    const [r, c] = spot;
    const nums = shuffle(numbers);

    for (const n of nums) {
      if (isValidPlacement(board, r, c, n)) {
        board[r][c] = n;
        if (backtrack()) return true;
        board[r][c] = 0;
      }
    }
    return false;
  }

  backtrack();
  return board;
}

export function solveBoard(initialBoard) {
  const size = initialBoard.length;
  const board = clone(initialBoard);

  function findEmptyCell() {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === 0) return [r, c];
      }
    }
    return null;
  }

  function backtrack() {
    const spot = findEmptyCell();
    if (!spot) return true;
    const [r, c] = spot;

    const nums = shuffle(Array.from({ length: size }, (_, i) => i + 1));
    for (const n of nums) {
      if (isValidPlacement(board, r, c, n)) {
        board[r][c] = n;
        if (backtrack()) return true;
        board[r][c] = 0;
      }
    }
    return false;
  }

  return backtrack() ? board : null;
}

export function generatePuzzle(size) {
  const solved = generateSolvedBoard(size);
  const total = size * size;

  const clues =
    size === 9 ? Math.floor(28 + Math.random() * 3) : Math.floor(total / 2);
  const blanks = total - clues;

  const puzzle = clone(solved);
  const cells = [...Array(total).keys()];

  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }

  let removed = 0;
  for (const idx of cells) {
    if (removed >= blanks) break;
    const r = Math.floor(idx / size);
    const c = idx % size;
    if (puzzle[r][c] !== 0) {
      puzzle[r][c] = 0;
      removed++;
    }
  }

  return {
    board: clone(puzzle),
    prefilled: clone(puzzle),
    solution: solved,
  };
}