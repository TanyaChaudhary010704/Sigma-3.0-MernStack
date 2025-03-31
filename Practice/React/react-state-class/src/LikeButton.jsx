import { useState } from "react"
const LikeButton = () => {
  let [isLike, setIsLike] = useState(false)
  function toggleLike() {
    setIsLike(!isLike)
  }
  return (
    <>
      <p onClick={toggleLike}>
      {
        isLike?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
      }
      </p>
    </>
  )
}

export default LikeButton