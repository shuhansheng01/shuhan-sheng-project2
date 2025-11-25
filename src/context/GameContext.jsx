import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { generatePuzzle, isComplete, isValidPlacement } from '../utils/sudoku.js'
const GameCtx = createContext(null)
export function GameProvider({ children }){
  const [size, setSize] = useState(9)
  const [puzzle, setPuzzle] = useState([])
  const [solution, setSolution] = useState([])
  const [board, setBoard] = useState([])
  const [selected, setSelected] = useState(null)
  const [status, setStatus] = useState('playing')
  const startRef = useRef(Date.now())
  const [elapsed, setElapsed] = useState(0)
  useEffect(()=>{ if(status!=='playing') return; const id=setInterval(()=>setElapsed(Math.floor((Date.now()-startRef.current)/1000)),1000); return ()=>clearInterval(id)},[status])
  const newGame = (s=size)=>{
    const { board: base, solution, prefilled } = generatePuzzle(s)
    setSize(s); setPuzzle(prefilled); setBoard(base); setSolution(solution)
    setSelected(null); setStatus('playing'); startRef.current=Date.now(); setElapsed(0)
  }
  const reset = ()=>{ setBoard(puzzle.map(r=>r.slice())); setSelected(null); setStatus('playing'); startRef.current=Date.now(); setElapsed(0) }
  useEffect(()=>{ newGame(9) },[])
  const setCell = (r,c,raw)=>{
    if(status!=='playing') return
    if(puzzle[r][c]!==0) return
    const val = (raw+'').trim()
    if(val===''){ setBoard(p=>{const n=p.map(x=>x.slice()); n[r][c]=0; return n}); return }
    const n = Number(val); if(!Number.isInteger(n)) return; if(n<1||n>size) return
    setBoard(p=>{const nbd=p.map(x=>x.slice()); nbd[r][c]=n; return nbd})
  }
  useEffect(()=>{ if(board.length && isComplete(board,size) && status==='playing'){ setStatus('won') } },[board,size,status])
  const value = useMemo(()=>({size,puzzle,board,solution,selected,setSelected,status,elapsed,newGame,reset,setCell}),[size,puzzle,board,solution,selected,status,elapsed])
  return <GameCtx.Provider value={value}>{children}</GameCtx.Provider>
}
export const useGame = ()=> useContext(GameCtx)
