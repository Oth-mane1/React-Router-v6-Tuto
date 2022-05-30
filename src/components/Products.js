import { Link } from "react-router-dom";
import { products as _products } from "./../data.js";
import "./../style/card.css"

const Products = (props) => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <ul className="cards">
          {
            _products.map((prd, i) => {
              return (
                <li key={i}>
                  <Link to={"/products/" + prd.id} className="card">
                    <img src={prd.image} className="card__image" alt={prd.name} />
                    <div className="card__overlay">
                      <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                        <div className="card__header-text">
                          <h3 className="card__title">{prd.name}</h3>
                          <span className="card__status" style={{ color: "var(--primary-500)" }}>See More <span>&rarr;</span></span>
                        </div>
                      </div>
                      <p className="card__description"></p>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>
    </>
  );
};

export default Products;
