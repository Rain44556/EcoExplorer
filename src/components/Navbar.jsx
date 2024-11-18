import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
        <div>
            <h1 className="font-bold text-2xl">EcoExplorer</h1>
        </div>
        <div className='nav-links space-x-3'>
            <Link to="/">Home</Link>
            <Link to="/profile">Update Profile</Link>

        </div>
        <div className='user-login flex gap-3 items-center'>
            <img src="" alt="" />
            <Link to="/user-profile">User Profile</Link>
            <Link to="/auth/login" className='btn rounded-none'>Login</Link>
        </div>
    </div>
    );
};

export default Navbar;