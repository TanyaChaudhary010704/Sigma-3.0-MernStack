//import { useState } from "react"
import { useFormik } from "formik"
const CommentsForm = ({addNewComment}) => {
  // let [formData, setFormData] = useState({
  //   username:"",
  //   remarks: "",
  //   rating:5,
  // })

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty'
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      username:"",
      remarks: "",
      rating:5,
    },
    validate,
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2))
      addNewComment(values)
    }
  })

  // let changeHandler = (event) => {
  //   setFormData((currData) => {
  //     return{...currData,[event.target.name]:event.target.value}
  //   })
  // }
  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   addNewComment(formData)
  //   setFormData({
  //     username:"",
  //     remarks: "",
  //     rating:5,
  //   })
  // }
  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
        {formik.errors.username? <div>{formik.errors.username}</div>:null}
        <br />
        <textarea
          name="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        >Remarks</textarea>
        <br />
        <input
          type="number"
          placeholder="rating"
          min={1} max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
        />
        <br /><br /><br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}

export default CommentsForm