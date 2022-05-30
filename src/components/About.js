import { Link } from "react-router-dom";
const aboutImg = require("./../images/About us page-cuate.svg")

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <img src={aboutImg.default} alt="about" />

      <Link to='/' className="btn">
        Go Back Home
      </Link>
    </section>
  );
};
export default About;
