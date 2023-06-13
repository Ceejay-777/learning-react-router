import {Link, Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';

const Sharedlayout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet />
    </>
  );
};
export default Sharedlayout;
