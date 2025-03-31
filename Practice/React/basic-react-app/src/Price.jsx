function Price({ oldPrice, newPrice }) {
  let oldPriceStyle = {
    textDecoration: "line-through",
    color:"red"
  }
  let styles = {
    fontWeight: "600",
    color: "green",
    backgroundColor: "yellow",
    width: "10rem",
    height:"2rem",
    borderBottomRightRadius:"1rem",
    borderBottomLeftRadius:"1rem",
  }
  return (
    <div style={styles}>
      <span style={oldPriceStyle}>{oldPrice}</span>
      &nbsp;
      &nbsp;
      &nbsp;
    <span>{newPrice}</span>
    </div>
  )
}

export default Price