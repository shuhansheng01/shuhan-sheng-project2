const mocked=[{user:'leafy_panda',count:128},{user:'mint_fox',count:77},{user:'river_otter',count:45}]
export default function Scores(){
  return (<section><h2>High Scores (Mock)</h2>
    <table border="1" cellPadding="8" style={{borderCollapse:'collapse'}}>
      <thead><tr><th>User</th><th>Sudokus Completed</th></tr></thead>
      <tbody>{mocked.map((r,i)=><tr key={i}><td>{r.user}</td><td>{r.count}</td></tr>)}</tbody>
    </table>
  </section>)
}
