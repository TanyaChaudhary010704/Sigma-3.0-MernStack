import {useSelector} from 'react-redux'
import AppForm from './AppForm.jsx'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const deleteHandler = (id) => {
    console.log("Delete", id);
    dispatch(removeTodo(id));
  }
  const doneHandler = (id) => {
    console.log("Delete", id);
    dispatch(toggleTodo(id));
  }

  console.log(todos)
  return (
    <div>
      <AppForm />
      <h2>Todo List</h2>
      <ul>
        {
        todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone?{textDecoration:'line-through'}:{}}>{todo.task}</span>
            <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
            <button onClick={()=>doneHandler(todo.id)}>Mark as Done</button>
          </li>
      ))}
    </ul>
    </div>
    
  )
}

export default Todo