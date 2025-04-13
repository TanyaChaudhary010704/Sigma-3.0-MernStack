import React from 'react'
import { useState } from 'react'
const LotteryGame = () => {
  let [ticket, setTicket] = useState("");
  let [win, setWin] = useState(false);

  let checkWinning = (num) => {
    let sum = 0;
    while (num != 0) {
      sum += (num%10)
      num = Math.floor(num/10)
    }
    if (sum == 15) {
      setWin(true)
    }
    else {
      setWin(false)
    }
  }

  let getTicket = () => {
    let num = Math.floor(Math.random() * 1000) + 1;
    //let num = 555;
    if (num < 10) {
      setTicket("00"+num.toString());
    }
    else if (num < 100) {
      setTicket("0"+num.toString());
    }
    else {
      setTicket(num.toString());
    }
    checkWinning(num)
  }

  return (
    <div>
      <h2>Lottery {win?"Congratulations , you won! ":""}</h2>
      <h3>Lottery Ticket = {ticket}</h3>
      <button onClick={getTicket}>Get New Ticket</button>
    </div>
  )
}

export default LotteryGame