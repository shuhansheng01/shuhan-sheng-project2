function subgridSize(n){ if(n===9) return {rh:3,cw:3}; if(n===6) return {rh:2,cw:3}; throw new Error('Unsupported size') }
export function isValidPlacement(board, r, c, n){
  const size=board.length
  for(let i=0;i<size;i++){ if(board[r][i]===n && i!==c) return false; if(board[i][c]===n && i!==r) return false }
  const {rh,cw}=subgridSize(size); const rs=Math.floor(r/rh)*rh, cs=Math.floor(c/cw)*cw
  for(let i=0;i<rh;i++) for(let j=0;j<cw;j++){ const rr=rs+i, cc=cs+j; if((rr!==r||cc!==c)&&board[rr][cc]===n) return false }
  return true
}
export function isComplete(board, size){
  for(let r=0;r<size;r++) for(let c=0;c<size;c++){ const v=board[r][c]; if(v===0) return false; if(!isValidPlacement(board,r,c,v)) return false }
  return true
}
function clone(b){ return b.map(row=>row.slice()) }
export function solveBoard(board){
  const size=board.length, b=clone(board)
  function find(){ for(let r=0;r<size;r++) for(let c=0;c<size;c++) if(b[r][c]===0) return [r,c]; return null }
  function dfs(){ const spot=find(); if(!spot) return true; const [r,c]=spot; for(let n=1;n<=size;n++){ b[r][c]=n; if(isValidPlacement(b,r,c,n)&&dfs()) return true; b[r][c]=0 } return false }
  return dfs()? b : null
}
function baseSolved(size){
  if(size===9){
    const base=3, side=9
    const pattern=(r,c)=> (base*(r%base) + Math.floor(r/base) + c) % side
    const rBase=[0,1,2].flatMap(g=>[0,1,2].map(r=>g*3+r))
    const cBase=[0,1,2].flatMap(g=>[0,1,2].map(c=>g*3+c))
    const nums=[1,2,3,4,5,6,7,8,9]
    const sh=a=>{ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a }
    sh(rBase); sh(cBase); sh(nums)
    return rBase.map(r=> cBase.map(c=> nums[pattern(r,c)]))
  }
  if(size===6){
    const side=6; const pattern=(r,c)=> ((r*3 + Math.floor(r/2) + c) % side)
    const rBase=[0,1,2,3,4,5], cBase=[0,1,2,3,4,5]; const nums=[1,2,3,4,5,6]
    const sh=a=>{ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a }
    sh(rBase); sh(cBase); sh(nums)
    return rBase.map(r=> cBase.map(c=> nums[pattern(r,c)]))
  }
  throw new Error('Unsupported size')
}
export function generatePuzzle(size){
  const solved = baseSolved(size)
  const clues = size===9? Math.floor(28+Math.random()*3) : 18
  const total = size*size
  const blanks = total - clues
  const puzzle = clone(solved)
  const cells=[...Array(total).keys()]
  for(let i=cells.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [cells[i],cells[j]]=[cells[j],cells[i]] }
  let removed=0
  for(const idx of cells){ if(removed>=blanks) break; const r=Math.floor(idx/size), c=idx%size; puzzle[r][c]=0; removed++ }
  return { board: clone(puzzle), prefilled: clone(puzzle), solution: solved }
}
