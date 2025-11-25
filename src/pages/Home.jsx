import { Link } from 'react-router-dom'
export default function Home(){
  return (<section className="container" style={{textAlign:'center',marginTop:32}}>
    <h1>Sudoku+</h1><p>A calm, single‑player Sudoku in React.</p>
    <div className="controls" style={{justifyContent:'center'}}>
      <Link to="/games/normal"><button className="primary">Play Normal (9×9)</button></Link>
      <Link to="/games/easy"><button>Play Easy (6×6)</button></Link>
      <Link to="/rules"><button>Read Rules</button></Link>
    </div>
  </section>)
}
