import { Link } from "react-router-dom";
const err404Img = require("./../images/404.svg")

const Error = () => {
  return (
    <section className='section'>
      <center>
        <img src={err404Img.default} alt="not found" />
        <Link to='/' className="btn" style={{ marginTop: "22px" }}><span>&larr;</span> Go Back home</Link>
      </center>
    </section>
  );
};
export default Error;
