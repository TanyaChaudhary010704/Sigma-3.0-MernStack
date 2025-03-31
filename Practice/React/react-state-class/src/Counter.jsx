import {useState} from "react"
const Counter = () => {
  // let count = 0;
  // function incCount() {
  //   count += 1;
  //   console.log(count);
  // }
  // return (
  //   <div>
  //     <h3>Count ={count}</h3>
  //     <button onClick={incCount}>Increase Count</button>
  //   </div>
  // )
  let  [count, setCount]  = useState(0);
  function incCount() {
    setCount(count+1)
  }
  return (
    <div>
      <h3>Count ={count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )

}

export default Counter