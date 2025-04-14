import { useState,useEffect } from "react"

const Counter = () => {
  let [countx, setCountx] = useState(0)
  let [county, setCounty] = useState(0)
  let incCountx = () => {
    setCountx((curr)=>curr+1)
  }
  let incCounty = () => {
    setCounty((curr)=>curr+1)
  }
  useEffect(()=>{console.log("This is side Effect")},[countx])
  return (
    <div>
      <h3>Count ={countx}</h3>
      <button onClick={incCountx}>+1</button>
      <h3>Count ={county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  )
}

export default Counter