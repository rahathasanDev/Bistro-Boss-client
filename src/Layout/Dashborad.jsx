import { NavLink, Outlet } from 'react-router-dom';
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaBook, FaCalendarAlt, FaHome, FaUser, FaUtensils } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import useCart from '../Hooks/useCart';

const Dashborad = () => {
  const [cart] = useCart();
  // ToDo
  const isAdmin = true;
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


          {
            isAdmin ? <>
              <li><NavLink to='/dashboard/home' ><FaHome />ADMIN HOME</NavLink></li>
              <li><NavLink to='/dashboard/addItem'><FaUtensils />ADD ITEMS</NavLink></li>
              <li><NavLink to='/dashboard/history'><IoWallet />MANAGE ITEMS</NavLink></li>
              <li><NavLink to='/dashboard/history'><FaBook />MANAGE BOOKINGS</NavLink></li>
              <li><NavLink to='/dashboard/allusers'><FaUser />ALL USERS</NavLink></li>
              
              </> 
              
              : 
              
              <>   {/* common content here */}
              <li><NavLink to='/dashboard/home' ><FaHome />USER HOME</NavLink></li>
              <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />RESERVATIONS</NavLink></li>
              <li><NavLink to='/dashboard/history'><IoWallet />PAYMENT HISTORY</NavLink></li>
              <li><NavLink to='/dashboard/mycart'><FaCartShopping /> MY CART <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
            </>
          }



          <div className='divider'></div>
          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li> <NavLink to="/menu"><GiHamburgerMenu />Menu</NavLink></li>
          <li><NavLink to='/order/salad'><FaShop />Shop</NavLink></li>
          <li><NavLink to='/'><MdEmail />Contact</NavLink></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashborad;