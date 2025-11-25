import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page home">
      <h1>Sudoku+</h1>
      <p className="tagline">
        A calm, single-player Sudoku experience with easy and normal modes.
      </p>
      <div className="home-actions">
        <Link to="/games/easy" className="btn primary">
          Play Easy Game
        </Link>
        <Link to="/games/normal" className="btn outline">
          Play Normal Game
        </Link>
        <Link to="/rules" className="link-under">
          Read the rules
        </Link>
      </div>
    </section>
  );
}