import Product from "./Product.jsx";
function ProductTab() {
  const features = ["hitech,durable"];
  return (
    <>
    <Product title="laptop" features={features} price={30000}/>
    <Product title="phone" features={features} price={40000}/>
    <Product title="pen" features={features} price={20000}/>
    </>
  )
}
export default ProductTab;