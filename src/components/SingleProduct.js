import { products } from "./../data.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = (props) => {
  const { productId } = useParams();
  const [product] = useState(products.find(p => p.id === productId));
  let navigate = useNavigate();

  useEffect(() => {
    if (product === undefined) {
      return navigate('*');
    }
  }, [product, navigate])

  useEffect(() => {
    document.title = props?.title + ": " + product?.name + " 🛍"
  })


  return (
    <section className='section product'>
      <Link to='/products' style={{ color: "var(--primary-500)" }}><span>&larr;</span> back to products</Link>
      <div style={{ padding: "1.5rem" }}>
        <h2>{product?.name}</h2>
        <img src={product?.image} className="" alt={product?.name} />
      </div>
    </section>
  );
};

export default SingleProduct;
