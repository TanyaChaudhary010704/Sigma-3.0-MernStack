import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
const TodoList = () => {

  let [todos, setTodos] = useState([{task:"Sample-task", id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos)=>{[...prevTodos, {task:newTodo , id: uuidv4()}]});
    //console.log("We have to add new task in todo");
    setNewTodo("");
  }

  let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder='Add Task' value={newTodo} onChange={updateTodoValue}/>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h4>Todo List</h4>
      <ul>
        {
          todos.map((todo) => 
            (<li key={todo.id}>{todo.task}</li>)
          )
        }
      </ul>
    </div>
  )
}

export default TodoList