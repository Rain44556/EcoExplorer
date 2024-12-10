import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CgUserlane } from "react-icons/cg";


const Navbar = () => {
    const { user, signout } = useContext(AuthContext);

    const navLinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/updatedProfile">Update Profile</NavLink>
        {
            user && <>
                <NavLink to="/myProfile">My Profile</NavLink>
            </>
        }
    </>


    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <img className="w-20" src="https://i.ibb.co.com/K275jY9/Screenshot-2024-11-28-104852-removebg-preview-transformed.png" alt="" />
                </div>

                <div className='nav-links space-x-3'>
                    {navLinks}
                </div>

                <div className='user-login gap-3 items-center hidden lg:flex'>
                    {
                        user && user?.email ?
                            <div className="relative group items-center justify-center">
                                <img className="w-20 rounded-full" src={user?.photoURL}></img>

                                <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity">{user.displayName}</p>
                            </div>
                            : (<button className="btn bg-yellow-300 rounded"><CgUserlane /></button>)
                    }

                    {
                        user && user?.email ? (<button onClick={signout} className="btn rounded bg-yellow-300">Logout</button>) : (<Link to="/auth/login" className='btn rounded bg-yellow-300'>Login</Link>
                        )
                    }
                    {/* <Link to="/user-profile">{user && user.name}</Link> */}

                </div>

                <div className=" lg:hidden pr-10">
                    <div className="dropdown bg-green-600 ">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-yellow-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow">

                            <div className='user-login'>
                                {
                                    user && user?.email ?
                                        <div>
                                            <li><img className="w-20 rounded-full" src={user?.photoURL}></img></li>

                                            <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity">{user.displayName}</p>
                                        </div>
                                        : (<button className="btn w-full bg-yellow-300 rounded"><CgUserlane /></button>)
                                }

                                {
                                    user && user?.email ? (<button onClick={signout} className="btn bg-yellow-300 rounded">Logout</button>) : (<Link to="/auth/login" className='btn rounded-none bg-yellow-300 mt-2 rounded'>Login</Link>
                                    )
                                }
                                {/* <Link to="/user-profile">{user && user.name}</Link> */}

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;