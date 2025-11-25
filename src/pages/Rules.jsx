export default function Rules() {
  return (
    <section className="page">
      <h2>How to Play Sudoku+</h2>
      <ol className="rules-list">
        <li>
          Each puzzle is a grid where every row must contain each number exactly
          once.
        </li>
        <li>
          Every column must also contain each number exactly once, without
          duplicates.
        </li>
        <li>
          The board is divided into smaller sub-grids; each sub-grid must also
          contain each number exactly once.
        </li>
        <li>
          In easy mode (6×6), you can only use numbers 1–6. In normal mode (9×9),
          you can use numbers 1–9.
        </li>
        <li>
          Prefilled cells are fixed clues and cannot be changed. Only empty cells
          may be edited.
        </li>
      </ol>

      <h3>Credits</h3>
      <p>
        Made by <strong>Shuhan Sheng</strong>.
      </p>
    </section>
  );
}