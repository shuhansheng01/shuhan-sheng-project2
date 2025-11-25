const MOCK_SCORES = [
  { user: "PandaPlayer", count: 42 },
  { user: "OceanSoul", count: 31 },
  { user: "MintLeaf", count: 18 },
  { user: "Sunrise", count: 9 },
];

export default function Scores() {
  return (
    <section className="page">
      <h2>High Scores (Mock)</h2>
      <p className="section-note">
        This page currently uses hard-coded data and does not store real scores.
      </p>
      <table className="scores-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Sudokus Completed</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_SCORES.map((row) => (
            <tr key={row.user}>
              <td>{row.user}</td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}