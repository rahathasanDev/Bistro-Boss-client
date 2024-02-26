import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }
    const navOptions =
        <div className="md:flex items-center justify-center">
            <li
            >
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/menu">Our Menu</NavLink>
            </li>
            <li>
                <NavLink to="/order/salad">Order Food</NavLink>
            </li>
            <li>
                <NavLink to="/secret">Secret</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/mycart'>
                    <button className="btn btn-sm">
                        <FaShoppingCart />

                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </NavLink>
            </li>

            {
                user ?
                    <>
                        {/* <span>{user?.displayName}</span> */}
                        <button onClick={handleLogOut} className=" btn btn-sm ml-2"><TbLogout />
                            LogOut</button>
                    </> :
                    <>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </>
            }


        </div>
    return (
        <>
            <div className="navbar fixed text-white  z-10 bg-opacity-20 bg-black font-medium max-w-screen-xl justify-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn ">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
