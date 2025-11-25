import { Link } from "react-router-dom";

const MOCK_GAMES = [
  { id: 1, title: "Morning Breeze 6x6", author: "CloudFox", mode: "easy" },
  { id: 2, title: "Forest Path 9x9", author: "MapleLeaf", mode: "normal" },
  { id: 3, title: "Calm River 6x6", author: "SunnyCat", mode: "easy" },
  { id: 4, title: "Evening Glow 9x9", author: "NightOwl", mode: "normal" },
];

export default function Games() {
  return (
    <section className="page">
      <h2>Game Selection</h2>
      <p className="section-note">
        These are mocked games with made-up authors. Click to jump into a mode.
      </p>
      <ul className="game-list">
        {MOCK_GAMES.map((g) => (
          <li key={g.id} className="game-item">
            <div>
              <h3>{g.title}</h3>
              <p className="muted">by {g.author}</p>
            </div>
            <Link
              to={g.mode === "easy" ? "/games/easy" : "/games/normal"}
              className="btn small"
            >
              Play
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}