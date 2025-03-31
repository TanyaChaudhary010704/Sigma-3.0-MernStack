function printHello() {
  console.log("hello")
}

function Button() {
  return (
    <div>
      <button onClick={printHello}>Click</button>
    </div>
  )
}

export default Button