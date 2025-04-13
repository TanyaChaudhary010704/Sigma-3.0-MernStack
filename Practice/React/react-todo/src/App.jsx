import React from 'react'
import TodoList from './TodoList'
import LotteryGame from './LotteryGame'

const App = () => {
  return (
    <div>
      <h1>Task 1 : Todo App</h1>
      <TodoList />
      <h1>Task 2 : Lottery Game</h1>
      <LotteryGame />
    </div>
  )
}

export default App