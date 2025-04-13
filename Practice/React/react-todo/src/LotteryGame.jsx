import { useState } from 'react'
import Ticket from './Ticket';
import {genTicket} from "./helper"
const LotteryGame = ({n,winCondition}) => {
  let [ticket, setTicket] = useState(genTicket(n));
  //let isWinning = sum(ticket) === winningScore;
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  }

  return (
    <div>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Get New Ticket</button>
      <h2>{isWinning && "Congratulations , you won! "}</h2>
    </div>
  )
}

export default LotteryGame