import { useState } from "react"
export default function Form() {

  let [formData, setFormData] = useState({
    fullName: "",
    age:0,
  })

  let changeHandler = (event) => {
    setFormData((currData) => {
      return {...currData,[event.target.name]:event.target.value}
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({fullName: "",age:0})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter your full name"
        type="text"
        value={formData.fullName}
        onChange={changeHandler}        id="fullName"
        name="fullName"
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        placeholder="Enter your age"
        type="text"
        value={formData.age}
        onChange={changeHandler}
        id="age"
        name="age"
      />
      <button>Submit</button>
    </form>
  )
}