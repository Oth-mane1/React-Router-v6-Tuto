import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='/home/more' className="btn">
        Go To More
      </Link>
      <br />
      <br />
      <Link to='/home/end' className="btn">
        Go To End
      </Link>
      <Outlet />
    </section>
  );
};
export default Home;
