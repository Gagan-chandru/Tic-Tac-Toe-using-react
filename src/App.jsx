import { useState } from 'react'
import './App.css'
const winningcombo =[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],
[0,3,6],[1,4,7],[2,5,8]];
let initialstate = Array(9).fill(null)
function App() {
  const [board,setboard] = useState(initialstate);
  const [player,setplayer] = useState(true);
  const [winner,setwinner] = useState(null);
  const [winningsquare,setwinningsquare] = useState([]);
  const [count1,setcount1] = useState(0);
  const [count2,setcount2] = useState(0);
  const [scores,setscores] = useState(false);
  function handleclick(index){
  if(board[index]||winner){
    return;
  }
  const newboard = [...board];
  newboard[index] = player ? "X":"O";
  setboard(newboard);
  setplayer(!player);
  checkwinner(newboard);
   } 
function checkwinner(board){
   for(const i of winningcombo){
   const[a,b,c]=i;
   if(board[a]&&board[a]==board[b]&&board[b]==board[c]){
    setwinner(board[a]);
    if(board[a]=='X'){
      setcount1((count1)=>count1+1)
    }
    else{
      setcount2((count2)=>count2+1)
    }
    setwinningsquare(i);
    return;
   }
  }
  if(!board.includes(null)){
    setwinner("Draw")
  }
}
function reset(){
  setboard(initialstate =Array(9).fill(null));
  setwinningsquare([]);
  setwinner(null)
}
function showscores(){
  setscores(!scores);
}
function resetscore(){
  setcount1(0);
  setcount2(0);
  reset();
  setplayer(tr)
}
return (
  <>
  <div className='game'> 
    <div className='title'>Tic Tac Toe</div>
    <div className={winner ?'winner-message':'notwin'}>{winner=='Draw'?'The Game Is Drawn':`${winner} Is The Winner`}</div>
    <div className='board'>{
board.map((value,index)=>{
  return (
   <button onClick={()=>{handleclick(index)}} onMouseEnter={(e)=>{e.currentTarget.focus()}}
    onKeyDown={(e)=>{if(e.key==="Enter"){handleclick(index)}}}
   className={winningsquare.includes(index) ?'winning-square':'square'} 
    key={index}>{value}</button>
  )})}
  </div>
  <div className='buttons'>
    <button onClick={()=>{reset()}} className ='reset-button'>Reset</button>
    <button onClick={()=>{showscores()}} className ='reset-button'>
      {scores?'Hide Scores':'Show Scores'}</button>
  </div>
  <div className={scores ?'scoreboard':'hide'}>
      <h2>Scores</h2>
      <div>
      <span>Player1</span>
      <span>Player2</span>
      </div>
   <div className='scores'> 
    <div className='scr'>{count1}</div>
    <div className='scr'>{count2}</div>
    </div>
    <button onClick={()=>{resetscore()}} className ='reset-button'>Reset</button>
  </div>
  </div>
 </>
)
}
export default App
