function Msg({username,textColor}){
  return (
    <div>
      <h1 style={{ color: textColor }}>{username}</h1>
    </div>
  )
}
export default Msg;