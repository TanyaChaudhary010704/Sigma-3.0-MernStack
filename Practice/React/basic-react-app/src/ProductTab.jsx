import Product from "./Product.jsx";
function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    border: "1px solid black",
    backgroundColor:"black"
  }
  return (
    <>
      <h2>Deals</h2>  
      <div style={styles}>
      <Product title="Asus Laptop" idx={0}/>
      <Product title="Samsung M31 phone" idx={1}/>
      <Product title="Infinity Gel Pen" idx={2}/>
      </div>
    </> 
  )
}
export default ProductTab;