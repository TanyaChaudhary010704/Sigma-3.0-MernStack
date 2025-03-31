import "./Product.css"
import Price from "./Price.jsx"
function Product({ title ,idx}) {
  let oldPrices = ["12.5", "20.5", "30"];
  let newPrices = ["90.5", "80.5", "100"];
  let description = [
    ["I am Laptop","Brand is Asus"],
    ["I am Phone","Brand is Samsung"],
    ["I am a Pen","Brand is Infinity"]]
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  )
}
export default Product;