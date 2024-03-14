import { NavLink, Outlet } from 'react-router-dom';
import { FaShop } from "react-icons/fa6";
import { FaAd, FaBook, FaCalendar,  FaHome, FaList, FaShoppingCart,FaUsers, FaUtensils } from 'react-icons/fa';
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
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItem">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                        <FaCalendar></FaCalendar>
                                        Not History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                                </li>
                            </>
                    }


          {/* shared nav links */}
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