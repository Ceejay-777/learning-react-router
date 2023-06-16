import Navbar from '../components/Navbar';
import {Link, Outlet} from "react-router-dom"

const Home = () => {
  return (
    <>
    <section className='section'>
     <h2>Home Page</h2>
     <Link to="/about" className="btn">About Us</Link>
    </section>
    </>
  );
};
export default Home;
