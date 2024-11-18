import { Outlet } from "react-router-dom";
import Navbar from "../../src/components/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-MontserratFamily">
           <nav className="w-10/12 mx-auto py-8"><Navbar></Navbar></nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;