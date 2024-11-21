import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


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
        <div className='flex justify-between items-center'>
            <div>
                <h1 className="font-bold text-2xl">EcoExplorer</h1>
            </div>
            <div className='nav-links space-x-3'>
                {navLinks}

            </div>
            <div className='user-login flex gap-3 items-center'>
                {
                    user && user?.email ?
                        <div className="relative group items-center justify-center">
                            <img className="w-20 rounded-full" src={user?.photoURL}></img>
                        
                            <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity">{user.displayName}</p>
                        </div>
                        : (<button className="btn rounded-none">User Profile</button>)
                }
                
                {
                    user && user?.email ? (<button onClick={signout} className="btn ">Logout</button>) : (<Link to="/auth/login" className='btn rounded-none'>Login</Link>
                    )
                }
                {/* <Link to="/user-profile">{user && user.name}</Link> */}

            </div>
        </div>
    );
};

export default Navbar;