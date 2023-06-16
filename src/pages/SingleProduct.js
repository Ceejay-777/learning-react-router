import {Link, useParams} from "react-router-dom"
import products from '../data'

const SingleProduct = () => {
  const {productID} = useParams()
  const product = products.find((product) => product.id === productID )
  const {name} = product
  return (
    <section className='section product'>
      <h4>Product: {name}</h4>
      <Link to="/products" className="btn">All products</Link>
    </section>
  );
};

export default SingleProduct;
   