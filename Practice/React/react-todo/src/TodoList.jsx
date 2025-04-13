import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './TodoList.css'
const TodoList = () => {

  let [todos, setTodos] = useState([{task:"Sample-task", id:uuidv4(),isDone:false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() ,isDone:false}]
    });
    //console.log("We have to add new task in todo");
    setNewTodo("");
  }

  let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
  }

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  let markAsDoneTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone:true,
          }
        } else {
          return todo
        }
      })
    )
  }
  let markAsDoneAllTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
          return {
            ...todo,
            isDone:true,
          }
      })
    )
  }

  return (
    <div className='TodoList'>
      <input type="text" placeholder='Add Task' value={newTodo} onChange={updateTodoValue}/>
      <button onClick={addNewTask}>Add Task</button>
      <hr />
      <h4>Todo List</h4>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={
                todo.isDone ?
                  {textDecoration:"line-through"}:{}}>{todo.task}</span>
              <button onClick={()=>markAsDoneTodo(todo.id)}>✔️</button>
              <button className='del' onClick={()=>deleteTodo(todo.id)}>x</button>
            </li>
          )
          )
        }
      </ul>
      <button onClick={markAsDoneAllTodo}>Mark As Done All</button>
    </div>
  )
}

export default TodoList