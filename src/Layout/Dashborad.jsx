import { NavLink, Outlet } from 'react-router-dom';
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Dashborad = () => {
  return (
    
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-orange-300 text-base-content">
          {/* Sidebar content here */}
          <li><NavLink to ='/dashboard/home' ><FaHome />USER HOME</NavLink></li>
          <li><NavLink to ='/dashboard/reservations'><FaCalendarAlt />RESERVATIONS</NavLink>
          </li><li><NavLink to ='/dashboard/history'><IoWallet />PAYMENT HISTORY</NavLink></li>
          <li><NavLink to ='/dashboard/mycart'><FaCartShopping />MY CART</NavLink></li>
          <div className='divider'></div>
          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li> <NavLink to="/menu"><GiHamburgerMenu />Menu</NavLink></li>
          <li><NavLink to ='/order/salad'><FaShop />Shop</NavLink></li>
          <li><NavLink to ='/'><MdEmail />Contact</NavLink></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashborad;