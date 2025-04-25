import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AppForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task))
    setTask('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e)=>setTask(e.target.value)} value={task}/>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default AppForm