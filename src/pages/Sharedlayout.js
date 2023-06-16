import {Link, Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const Sharedlayout = () => {
  return (
    <>
        <StyledNavbar></StyledNavbar>
        <Outlet />
    </>
  );
}
export default Sharedlayout;
