import { useEffect } from 'react'
import Board from '../components/Board.jsx'
import { useGame } from '../context/GameContext.jsx'
export default function GamePage({ size }){
  const { newGame, reset, elapsed, status } = useGame()
  useEffect(()=>{ newGame(size) }, [size])
  const mm = String(Math.floor(elapsed/60)).padStart(2,'0'), ss = String(elapsed%60).padStart(2,'0')
  return (<section>
    <h2>{size===9? 'Normal 9×9':'Easy 6×6'}</h2>
    <div className="info"><div>Timer: {mm}:{ss}</div>{status==='won' && <div>🎉 Congratulations! You solved it.</div>}</div>
    <Board/>
    <div className="controls"><button className="primary" onClick={()=>newGame(size)}>New Game</button><button onClick={reset}>Reset</button></div>
    <p style={{fontSize:12,color:'#777',marginTop:8}}>Tip: click a cell and type 1–{size} to fill, or delete to clear. Incorrect placements turn red.</p>
  </section>)
}
