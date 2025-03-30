import "./Product.css"
function Product({ title, features ,price}) {
  const list = features.map((feature) => <li>{feature}</li>)
  let styles = { backgroundColor: price > 30000 ? "grey" : "" }
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Product Description</h5>
      <p>{list}</p>
      {price>30000?<p>"Greater"</p>:null}
    </div>
  )
}
export default Product;