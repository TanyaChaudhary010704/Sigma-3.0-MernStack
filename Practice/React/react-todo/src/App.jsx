import React from 'react'
import TodoList from './TodoList'
import LotteryGame from './LotteryGame'
import { sum } from './helper'

const App = () => {
  let winCondition = ((ticket) => {
    return sum(ticket) === 15;
  })
  return (
    <div>
      <h1>Task 1 : Todo App</h1>
      <TodoList />
      <h1>Task 2 : Lottery Game</h1>
      <LotteryGame n={3} winCondition={winCondition}/>
    </div>
  )
}

export default App