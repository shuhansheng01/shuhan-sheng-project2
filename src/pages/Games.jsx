import { Link } from 'react-router-dom'
const mocked=[
  {title:'Misty Morning',author:'A. Sparrow',mode:'easy'},
  {title:'Forest Trail',author:'N. Finch',mode:'normal'},
  {title:'River Stones',author:'K. Wren',mode:'normal'},
  {title:'Leaf Dance',author:'M. Lark',mode:'easy'},
]
export default function Games(){
  return (<section><h2>Game Selection</h2><ul>
    {mocked.map((g,i)=>(<li key={i} style={{margin:'8px 0'}}>
      <strong>{g.title}</strong> — {g.author} &nbsp; <Link to={`/games/${g.mode}`}>Play</Link>
    </li>))}
  </ul></section>)
}
