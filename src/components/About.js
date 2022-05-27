import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>      
      <Link to='/' className="btn">
        Go Back Home
      </Link>
    </section>
  );
};
export default About;
