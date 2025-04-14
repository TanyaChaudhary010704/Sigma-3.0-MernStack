import { useEffect, useState } from "react"

const Joker = () => {
  let [joke,setJoke] = useState({})
  const url = "https://official-joke-api.appspot.com/random_joke"
  const getJoke= async()=> {
    let resp = await fetch(url)
    let jsonResp = await resp.json()
    console.log(jsonResp)
    setJoke({setup:jsonResp.setup,punchline:jsonResp.punchline})
  }
  useEffect(() => {
    async function getFirstJoke() {
      let resp = await fetch(url)
      let jsonResp = await resp.json()
      console.log(jsonResp)
      setJoke({setup:jsonResp.setup,punchline:jsonResp.punchline})
    }
    getFirstJoke();
  } ,[])
  return (
    <div>
      <button onClick={getJoke}>Get New Joke</button>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  )
}

export default Joker