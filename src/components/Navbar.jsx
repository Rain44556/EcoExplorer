import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const navLinks = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/booklists">Update Profile</NavLink>
    
</>
    const {user, signout} = useContext(AuthContext);

    return (
        <div className='flex justify-between items-center'>
        <div>
            <h1 className="font-bold text-2xl">EcoExplorer</h1>
        </div>
        <div className='nav-links space-x-3'>
           {navLinks}

        </div>
        <div className='user-login flex gap-3 items-center'>
            <img src="" alt="" />
            {
                user && user?.email ? (<button onClick={signout} className="btn ">Logout</button>) : (<Link to="/auth/login" className='btn rounded-none'>Login</Link>
            )
            }
            <Link to="/user-profile">{user && user.name}</Link>
            
        </div>
    </div>
    );
};

export default Navbar;