import { useState } from "react"
import CommentsForm from "./CommentsForm"
import './Comment.css'
const Comment = () => {
  let [comments, setComments] = useState([{
    username: "@tanu132",
    remarks: "I liked the product",
    rating:4
  }])
  let addNewComment =(comment) => {
    setComments((currComments) => [...currComments,comment])
  }
  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span className="rating">{comment.rating}</span>
            <p>{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment}/>
    </>
    
  )
}

export default Comment